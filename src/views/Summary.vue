<template>
  <div class="row align-items-center w-100">
    <div
      @mouseover="imageHover = true"
      @mouseleave="imageHover = false"
      :class="getComputedImageClass"
      class="col img-container animate-slide-in-from-top"
    >
      <img
        :class="getImageFilterClass"
        alt="Profile"
        src="../assets/landing-profile.png"
        rel="preload"
      />
    </div>
    <div class="col animate-slide-in-from-bottom">
      <div
        @mouseover="textHover = true"
        @mouseleave="textHover = false"
        :class="getComputedTextClass"
        class="row"
      >
        <div v-if="isInteractive">
          <terminal />
        </div>
        <div v-else class="mx-auto">
          <h1>
            Hey
            <button class="button-container-wave mx-0 px-0">
              &#128075;
            </button>
            there, I'm Ravi Jayaraman
          </h1>
          <h3>
            Software Engineer, passionate about open source work to support
            community. Get in touch to know me better, keen to know about my
            work? Check out my
            <a
              class="link-container-sm"
              href="https://github.com/ravijayaraman"
              target="_blank"
              ><h3><b-icon-github></b-icon-github></h3
            ></a>
            and
            <a
              class="link-container-sm"
              href="https://www.linkedin.com/in/jayaraman-ravi"
              target="_blank"
              ><h3><b-icon-linkedin></b-icon-linkedin></h3
            ></a>
            profile or download my resume.
          </h3>
        </div>
      </div>
      <div class="d-flex align-items-center my-4">
        <a
          v-if="!isInteractive"
          class="d-flex link-container-lg mx-auto"
          href="https://drive.google.com/file/d/1e8_d1G6BRtdQKDoyuVegVUAPKyTWLgzd/view?usp=sharing"
          target="_blank"
          ><h3>
            Resume
            <b-icon-arrow-up-right-circle></b-icon-arrow-up-right-circle></h3
        ></a>
        <button
          @click="toggleInteractive"
          class="d-flex link-container-lg align-items-center mx-auto"
        >
          <h3>
            {{ isInteractive ? "Go back" : "Switch to interactive terminal" }}
          </h3>
          <h3 class="text-blink p-0" v-if="isInteractive">
            <b-icon-arrow-return-left></b-icon-arrow-return-left>
          </h3>
          <h3 class="text-blink p-0" v-if="!isInteractive">
            <b-icon-arrow-return-right></b-icon-arrow-return-right>
          </h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from "./Terminal.vue";
export default {
  components: {
    Terminal
  },
  data() {
    return {
      textHover: false,
      imageHover: false,
      hover: false,
      isInteractive: false
    };
  },
  mounted() {},
  computed: {
    getComputedTextClass() {
      return this.textHover ? "active" : "inactive";
    },
    getComputedImageClass() {
      return this.imageHover ? "active" : "inactive";
    },
    getImageFilterClass() {
      return this.isInteractive ? "img-filter" : "";
    },
    getTextForTerminalButton() {
      return this.isInteractive
        ? "Go back <b-icon-arrow-return-left></b-icon-arrow-return-left>"
        : "Switch to interactive terminal <b-icon-arrow-return-right></b-icon-arrow-return-right>";
    }
  },
  methods: {
    toggleInteractive() {
      this.isInteractive = !this.isInteractive;
    }
  }
};
</script>

<style scoped>
.active {
  transition: all 0.3s ease;
  transform: scale(1.02);
}

.inactive {
  transition: all 0.3s ease;
  transform: scale(1);
}

.animate-slide-in-from-top {
  animation: 1s ease-out 0s 1 slideInFromTop;
}

.animate-slide-in-from-bottom {
  animation: 1s ease-out 0s 1 slideInFromBottom;
}

.img-container img {
  transition: all 1s ease 0s;
  width: 95%;
  height: auto;
}

.img-filter {
  transition: all 1s ease 0s;
  filter: grayscale(100%);
}

.link-container-lg {
  color: #000000 !important;
  text-decoration: none;
  background: transparent;
  padding: 15px;
  border-radius: 10px;
  border: 3px solid #494949 !important;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: auto;
}

.link-container-lg:hover {
  color: #000000 !important;
  background: #fedd64;
  border-radius: 20px;
  border-color: #fedd64 !important;
  transition: all 0.3s ease 0s;
  transform: scale(1.1);
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
  animation: wave-hand 0.2s reverse 5;
  transform: scale(1.3);
  animation-direction: alternate;
}

.button-container-wave:hover {
  background: transparent;
  border: none;
  animation: wave-hand 0.2s reverse infinite;
  transform: scale(1.3);
  animation-direction: alternate;
}

@keyframes wave-hand {
  0% {
    transform: scale(1.3) rotate(40deg);
  }
  100% {
    transform: scale(1.3) rotate(0deg);
  }
}

.text-blink {
  animation: text-blink 0.3s infinite alternate;
}

@keyframes text-blink {
  from {
    color: transparent;
  }
  to {
    color: #000000;
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
