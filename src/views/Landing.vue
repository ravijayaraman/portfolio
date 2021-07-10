<template>
  <div class="container">
    <keep-alive>
      <component :is="getCurrentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Summary from "./Summary.vue";
import Experience from "./Experience.vue";
export default {
  components: {
    Summary,
    Experience
  },
  data() {
    return {
      listOfPages: [Summary, Experience],
      currentPageIndex: 0
    };
  },
  mounted() {
    window.addEventListener("keyup", this.getKeyCode);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.getKeyCode);
  },
  computed: {
    getCurrentComponent() {
      return this.listOfPages[this.currentPageIndex];
    }
  },
  methods: {
    previousComponent() {
      if (this.currentPageIndex > 0) {
        this.currentPageIndex -= 1;
      }
    },
    nextComponent() {
      if (this.currentPageIndex < this.listOfPages.length - 1) {
        this.currentPageIndex += 1;
      }
    },
    getKeyCode(event) {
      switch (event.keyCode) {
        case 38:
          this.previousComponent();
          break;
        case 40:
          this.nextComponent();
          break;
      }
    }
  }
};
</script>
