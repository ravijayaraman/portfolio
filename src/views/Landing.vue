<template>
  <div class="row h-100 d-flex align-items-center px-3">
    <div class="col img-container">
      <img alt="Profile" src="../assets/landing-profile.png" />
    </div>
    <div class="col">
      <div class="row">
        <h1>Hey &#x270B; there, I'm Ravi Jayaraman</h1>
        <h2>
          Software Engineer, passionate about open source work to support
          community. Get in touch to know me better, keen to know about my work?
          Check out my
          <a
            class="link-container-sm"
            href="https://github.com/ravijayaraman"
            target="_blank"
            ><h1><b-icon-github></b-icon-github></h1
          ></a>
          and
          <a
            class="link-container-sm"
            href="www.linkedin.com/in/jayaraman-ravi"
            target="_blank"
            ><h1><b-icon-linkedin></b-icon-linkedin></h1
          ></a>
          profile or download my resume.
        </h2>
      </div>
      <div class="row">
        <a
          class="link-container-lg mx-auto my-4"
          href="https://drive.google.com/file/d/1e8_d1G6BRtdQKDoyuVegVUAPKyTWLgzd/view?usp=sharing"
          target="_blank"
          ><h2>Resume</h2></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container img {
  width: 100%;
  height: auto;
}

.link-container-lg {
  color: #000000 !important;
  text-decoration: none;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.3s ease 0s;
  width: auto;
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
</style>
