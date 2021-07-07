<template>
  <div class="m-4 justify-content-start" @mouseenter="focusInput">
    <div
      class="d-flex option-window align-items-center"
      @mouseenter="focusInput"
    >
      <b-icon class="m-2" icon="circle-fill" variant="danger"></b-icon>
      <b-icon icon="circle-fill" variant="warning"></b-icon>
      <b-icon class="m-2" icon="circle-fill" variant="success"></b-icon>
    </div>
    <div class="col command-window p-2" @mouseenter="focusInput">
      <p
        id="terminalText"
        class="text-start text-white d-flex"
        v-html="terminalText"
      ></p>
      <div class="d-flex flex-row align-items-start">
        <p class="text-left text-white">
          {{ currentDirectory }}
        </p>
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
      currentDirectory: "~/portfolio/ $",
      validCommandSet: new Set(["pwd", "cat", "whoami", "cd", "ls", "help"])
    };
  },
  mounted() {
    this.focusInput();
  },
  computed: {},
  methods: {
    focusInput() {
      this.$refs.inputCommand.focus();
    },
    async processCommand() {
      await this.validateCommand()
        .then(commands => {
          this.parseCommandOutput(commands).then(output => {
            this.terminalText += `<br>${this.currentDirectory} ${this.currentCommand} <br>${output}`;
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
      return Promise.resolve(commands);
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
        } else if (commands.length === 1) {
          reject(
            `No arguements passed to command ${commands[0]}, try typing 'help' for more information`
          );
        }
        resolve(commands);
      });
    },
    errorHandler(error) {
      this.terminalText += `<br>${this.currentDirectory} ${this.currentCommand} <br>${error}`;
      this.currentCommand = "";
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
  height: auto;
  max-height: 200px;
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
