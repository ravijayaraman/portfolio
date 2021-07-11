<template>
  <div class="row align-items-center w-100 my-2">
    <div class="col animate-slide-in-from-bottom">
      <div
        @mouseover="textHover = true"
        @mouseleave="textHover = false"
        :class="getComputedTextClass"
        class="row"
      >
        <h1>
          Sydney Uni Mobile App
        </h1>
        <h3>
          Design, develop and ship code in a fast paced environment to deliver
          enterprise application for all the university student and staff
          members.
        </h3>
      </div>
      <div
        @mouseover="detailTextHover = true"
        @mouseleave="detailTextHover = false"
        :class="getComputedDetailTextClass"
        class="row my-3"
      >
        <h1>
          Technology Stack
        </h1>
        <h3>
          <div class="row">React Native, JavaScript, NodeJS, Jest, PHP</div>
          <div class="row">
            AWS Lambda, S3, RDS, DynamoDB, SQS, VPC
          </div>
        </h3>
      </div>
      <div class="d-flex align-items-center my-4">
        <a
          v-if="!isInteractive"
          class="d-flex link-container-lg mx-auto"
          href="https://apps.apple.com/au/app/sydney-uni/id542003075#?platform=iphone"
          target="_blank"
          ><h3>
            App Store
            <b-icon-arrow-up-right-circle></b-icon-arrow-up-right-circle></h3
        ></a>
        <a
          v-if="!isInteractive"
          class="d-flex link-container-lg mx-auto"
          href="https://play.google.com/store/apps/details?id=com.blackboard.android.central.sydney_au"
          target="_blank"
          ><h3>
            Play Store
            <b-icon-arrow-up-right-circle></b-icon-arrow-up-right-circle>
          </h3>
        </a>
      </div>
    </div>
    <div
      :class="getComputedImageClass"
      class="col-3 img-container animate-slide-in-from-top"
    >
      <img
        :class="getImageFilterClass"
        src="../assets/syd-uni-1.png"
        rel="preload"
        @mouseover="imageHover = true"
        @mouseleave="imageHover = false"
      />
    </div>
    <div
      :class="getComputedImageClass"
      class="col-3 img-container animate-slide-in-from-bottom"
    >
      <img
        :class="getImageFilterClass"
        src="../assets/syd-uni-4.png"
        rel="preload"
        @mouseover="imageHover = true"
        @mouseleave="imageHover = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textHover: false,
      detailTextHover: false,
      imageHover: false,
      hover: false,
      isInteractive: false
    };
  },
  computed: {
    getComputedTextClass() {
      return this.textHover ? "active" : "inactive";
    },
    getComputedDetailTextClass() {
      return this.detailTextHover ? "active" : "inactive";
    },
    getComputedImageClass() {
      return this.imageHover ? "active" : "inactive";
    },
    getImageFilterClass() {
      return this.isInteractive ? "img-filter" : "";
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
  border-radius: 50px;
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
  color: #ffffff !important;
  background: #e64626;
  border-radius: 20px;
  border-color: #e64626 !important;
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
  background: #e64626;
  border-radius: 50%;
  border-color: #e64626 !important;
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
