<template>
  <div
    class="my-4 justify-content-start"
    @mouseenter="focusInput"
    @mouseleave="blurInput"
  >
    <div
      class="d-flex option-window align-items-center"
      @mouseenter="focusInput"
      @mouseleave="blurInput"
    >
      <b-icon class="m-2" icon="circle-fill" variant="danger"></b-icon>
      <b-icon icon="circle-fill" variant="warning"></b-icon>
      <b-icon class="m-2" icon="circle-fill" variant="success"></b-icon>
    </div>
    <div
      class="col command-window p-2"
      @mouseenter="focusInput"
      @mouseleave="blurInput"
    >
      <p
        id="terminalText"
        class="text-start text-white d-flex"
        v-html="terminalText"
      ></p>
      <div class="d-flex flex-row align-items-start">
        <p class="text-left text-white">~/{{ currentDirectory }}/ $</p>
        <input
          id="inputCommand"
          ref="inputCommand"
          v-model="currentCommand"
          class="text-white bg-transparent px-1 py-0 m-0"
          v-on:keydown.enter="processCommand"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terminalText:
        "Hi my name is Ravi,<br> this is a terminal window you could use to browse and get information about my work. Let's get started, if you know basic linux commands feel free to go ahead, if not then you can type 'help' command to know more. Happy searching! :)",
      terminalCommands: [],
      currentCommand: "",
      hashDirectory: {
        portfolio: {
          about: {
            "about.txt":
              "Software Engineer, passionate about open source work to support community. Get in touch to know me better, let grab a coffee and discuss!"
          },
          projects: {
            "projects.txt":
              "Software Engineer, passionate about open source work to support community. Get in touch to know me better, let grab a coffee and discuss!"
          },
          education: {
            "The_University_of_Sydney.txt":
              "Master of Information technology and Master of Information technology management, major in Data management and Analytics.<br>WAM: 74.5"
          }
        }
      },
      currentDirectory: "",
      currentDirectoryChildren: {},
      hashCommand: {
        pwd: {
          helpText: "Display the present working directory"
        },
        cat: {
          helpText: "Display the information present in the file",
          output: commands => {
            (commands = typeof commands === typeof [] ? commands[1] : commands),
              this.currentDirectoryChildren;
            return `<br>${this.currentDirectoryChildren[commands]}<br>`;
          }
        },
        whoami: {
          helpText: "Display summary for Ravi Jayaraman"
        },
        cd: {
          helpText: "Change directory",
          output: commands => {
            return this.getCurrentDirectory(
              typeof commands === typeof [] ? commands[1] : commands,
              this.currentDirectoryChildren
            )
              .then(({ directory, children }) => {
                this.currentDirectory += `/${directory}`;
                this.currentDirectoryChildren = children;
                return `switched to ${directory} directory`;
              })
              .catch(error => this.errorHandler(error));
          }
        },
        ls: {
          output: () => {
            let strOutput = "";
            Object.keys(this.currentDirectoryChildren).forEach(key => {
              strOutput += `<br>${key}/`;
            });
            return strOutput;
          },
          helpText: "List all the filenames within the current directory"
        },
        help: {
          output: () => {
            let strOutput = "";
            Object.entries(this.hashCommand).forEach(command => {
              const [key, { helpText }] = command;
              strOutput += helpText
                ? `<br>&emsp;&emsp;${key}&emsp;&emsp;${helpText}`
                : "";
            });
            return strOutput;
          }
        }
      },
      validCommandSet: {}
    };
  },
  mounted() {
    this.validCommandSet = new Set(Object.keys(this.hashCommand));
    this.getCurrentDirectory().then(({ directory, children }) => {
      this.currentDirectory += directory;
      this.currentDirectoryChildren = children;
    });
  },
  computed: {},
  methods: {
    focusInput() {
      this.$refs.inputCommand.focus();
    },
    blurInput() {
      this.$refs.inputCommand.blur();
    },
    async processCommand() {
      this.terminalCommands.push(this.currentCommand);
      await this.validateCommand()
        .then(commands => {
          this.parseCommandOutput(commands).then(output => {
            this.terminalText += `<br>~/${this.currentDirectory}/ $ ${this.currentCommand} <br>${output}`;
          });
        })
        .catch(error => {
          this.errorHandler(error);
        })
        .finally(() => {
          this.currentCommand = "";
          let terminalTextContainer = this.$el.querySelector("#terminalText");
          terminalTextContainer.scrollTop = terminalTextContainer.scrollHeight;
        });
    },
    parseCommandOutput(commands) {
      return Promise.resolve(
        this.hashCommand[
          typeof commands === typeof [] ? commands[0] : commands
        ].output(commands)
      );
    },
    validateCommand() {
      return new Promise((resolve, reject) => {
        let commands = this.currentCommand.split(" ");
        if (!this.validCommandSet.has(commands[0])) {
          reject(
            `${commands[0]} is not a valid command, try typing 'help' for more information`
          );
        }
        if (commands.length > 2) {
          reject(
            `${
              commands[0]
            } takes only one arguement you have passed ${commands.length -
              1}, try typing 'help' for more information`
          );
        } else if (
          !["help", "whoami", "ls"].includes(commands[0]) &&
          commands.length === 1
        ) {
          reject(
            `No arguements passed to command ${commands[0]}, try typing 'help' for more information`
          );
        }
        resolve(commands);
      });
    },
    errorHandler(error) {
      this.terminalText += `<br>~/${this.currentDirectory}/ $ ${this.currentCommand} <br>${error}`;
      this.currentCommand = "";
    },
    getCurrentDirectory(directoryName, hashDirectory) {
      return new Promise((resolve, reject) => {
        console.log(directoryName, hashDirectory);
        if (!(directoryName && hashDirectory)) {
          resolve({
            directory: "portfolio",
            children: this.hashDirectory.portfolio
          });
        }
        console.log(Object.hasOwnProperty.call(hashDirectory, directoryName));
        if (Object.hasOwnProperty.call(hashDirectory, directoryName)) {
          resolve({
            directory: directoryName,
            children: hashDirectory[directoryName]
          });
        } else {
          reject(
            `${directoryName} not found! Try using 'ls' command to list all the content of the current folder.`
          );
        }
      });
    }
  }
};
</script>

<style scoped>
input,
input::before,
input:focus,
input:focus {
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}

#terminalText::-webkit-scrollbar {
  width: 0.3em;
}

#terminalText::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #323232;
}

#terminalText::-webkit-scrollbar-thumb {
  background-color: #e3e3e3;
  outline: 1px solid #e3e3e3;
}

#terminalText {
  height: 50vh;
  overflow-y: scroll;
}

.active {
  transition: all 0.3s ease;
  transform: scale(1.02);
}

.inactive {
  transition: all 0.3s ease;
  transform: scale(1);
}

.command-window {
  background-color: #323232;
  border-radius: 0px 0px 10px 10px;
}

.option-window {
  background-color: #e3e3e3;
  border-radius: 10px 10px 0px 0px;
}

.link-container-lg:hover {
  color: #000000 !important;
  background: #fedd64;
  border-radius: 30px;
  border-color: #fedd64 !important;
  transition: all 0.3s ease 0s;
  transform: scale(1.2);
}

.link-container-sm {
  color: #000000 !important;
  text-decoration: none;
  background: transparent;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: auto;
}

.link-container-sm:hover {
  color: #000000 !important;
  background: #fedd64;
  border-radius: 50%;
  border-color: #fedd64 !important;
  transition: all 0.3s ease 0s;
  transform: scale(1.2);
}

.button-container-wave {
  text-decoration: none;
  border: none;
  background: none;
  transform: rotate(-20deg);
}

.button-container-wave:hover {
  background: transparent;
  border: none;
  animation: wave-hand 0.2s infinite;
  transform: scale(1.5) rotate(-20deg);
  animation-direction: alternate;
}

@keyframes wave-hand {
  0% {
    transform: scale(2) rotate(-20deg);
  }
  100% {
    transform: scale(2) rotate(20deg);
  }
}
</style>
