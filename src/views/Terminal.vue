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
              "Software Engineer, passionate about open source work to support community. Let's get in touch! &#x270B; Grab a coffee &#9749; and discuss, how does that sound? &#128526;<br>E: ravijayaraman13894@gmail.com M: 0468 537 327",
            "hobbies.txt": "Cooking, soccer, hiking, design thinking"
          },
          experience: {
            "experience.txt": `The University of Sydney
              <br>-------------------------------
              <br>Software Engineer October 2020 – Current
              <br>Programming languages: JavaScript | PHP | YAML | Node | Vue | React Native
              <br>&emsp;• Designed scalable backend infrastructure in AWS to minimise load by 20% on servers.
              <br>&emsp;• Increased response time for API by 30% by adding scalable queuing infrastructure.
              <br>&emsp;• Grew retention of students using mobile application from 9,600 users to 11,300 in 3
              months by restructuring services offered to students.
              <br><br>Research Intern December 2020 – February 2021
              <br>Programming languages: JavaScript | Node | Node | Java
              <br>&emsp;• Collaborated in research projects targeting smart-home conflict resolution.
              <br>&emsp;• Debugged IoT device by reverse engineering Android app to fetch endpoint call.
              <br>&emsp;• Designed and developed comprehensive dashboard to improve overall health by
              monitoring user activities.
              <br>&emsp;• Analysed the user patterns to improve IoT based smart-home services by using
              motion detection and data chunking.
              <br>&emsp;• Improved data collection strategy by using 2 motion sensors (short and long ranged)
              to enhance the qualitative aspect of the data.
              <br><br>SYNCS! Hackathon August 2019
              <br>----------------------------------
              <br>Tools and programming languages: Figma | Swift | GitHub | HTML | CSS | Angular
              <br>&emsp;• Brainstormed and collaborated to create a business case to ease storage problems
              by making them affordable and quick to find.
              <br>&emsp;• Designed wireframes in Figma to showcase user experience for storage space
              application.
              <br>&emsp;• Developed iOS application within 24 hours by collaborating in group of 4 team
              members.
              <br><br>Winjit Technologies Ltd, Global Software development company established in India
              <br>-----------------------------------
              <br>Software Engineer March 2017 – December 2018
              <br>Programming languages: Swift | Objective C | HTML | CSS | JavaScript
              <br>&emsp;• Improved velocity of development by 15% by designing reusable components across
              projects.
              <br>&emsp;• Secured phase second of the banking project before the end of phase one by
              improving velocity of the development.
              <br>&emsp;• Gained confidence of the client by shipping code before time for smooth release, as
              a result onboarded new clients in financial sector.`,
            "leadership_and_awards.txt": `The University of Sydney
              <br>-----------------------------
              <br>Academic tutor February 2021 – July 2021
              <br>&emsp;• Learned the skill of teaching students by applying my knowledge gained during peer
              mentoring as a result student were more inquisitive about additional readings.
              <br>&emsp;• Designed course presentations for tutorials to involve students to develop a culture of
              sharing knowledge through active learning with the help of tools like Mentimeter and
              padlet as a result student were more involved during the tutorials.
              <br><br>Research Intern December 2020 – February 2021

              <br>&emsp;• Selected as one of the 690 students for 3 month vacation research program for high-
              achieving student in Computer Science based on leadership potential and academic

              success.
              <br><br>Peer mentor August 2019 – November 2019
              <br>&emsp;• Improved leadership skills and public speaking by mentoring 68 incoming students in
              the Master of IT program.
              <br>&emsp;• Organised activities and friendly environment for new students to feel comfortable
              away from home and better understand culture.
              <br>&emsp;• Grew professionally and personally by connecting with students
              <br>&emsp;• Guided the new students with potential opportunities to grow and discover university
              and research life.

              <br><br>SYNCS! Hackathon Aug 2019
              <br>&emsp;• Third place – SYNCS! Hackathon at Canva, 2019. Project submission details
              available at https://syncshack.devpost.com/project-gallery`
          },
          education: {
            "masters.txt": `The University of Sydney
              <br>February 2019 – December 2020
              <br>Master of Information Technology and Master of Information Technology Management
              <br>Grade: WAM 74.5`,
            "bachelor.txt": `Savitribai Phule Pune University, India
              <br>July 2012 – May 2016
              <br>Bachelor of Engineering in Computer Science
              <br>Grade: 7.5 CGPA`
          }
        }
      },
      currentDirectory: "",
      currentDirectoryChildren: {},
      hashCommand: {
        clear: {
          helpText:
            "Clear the current workspace by pushing the previous results to the top",
          output: () => {
            return "<br><br><br><br><br><br><br><br><br><br><br><br>";
          }
        },
        history: {
          helpText: "Display all previous commands entered in the terminal",
          output: () => {
            let strOutput = "";
            let commandHistory = [...this.terminalCommands];
            if (commandHistory.length === 1) {
              strOutput = "There are no commands execute so far";
              return strOutput;
            }
            commandHistory.pop();
            commandHistory.forEach(command => {
              strOutput += `<br>${command}`;
            });
            return strOutput;
          }
        },
        pwd: {
          helpText: "Display the present working directory",
          output: () => {
            return `~/${this.currentDirectory}/`;
          }
        },
        cat: {
          helpText: "Display the information present in the file",
          output: commands => {
            commands = typeof commands === typeof [] ? commands[1] : commands;
            return `<br>${this.currentDirectoryChildren[commands]}<br>`;
          }
        },
        whoami: {
          helpText: "Display summary for curresnt session",
          output: () => {
            return `${navigator.platform} ${navigator.product} ${navigator.appName} ${navigator.userAgent}`;
          }
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
              strOutput += `<br>${key}`;
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
          !["help", "whoami", "ls", "history", "pwd", "clear"].includes(
            commands[0]
          ) &&
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
        if (!(directoryName && hashDirectory)) {
          resolve({
            directory: "portfolio",
            children: this.hashDirectory.portfolio
          });
        }
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
  height: 40vh;
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
