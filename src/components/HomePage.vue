<template>
  <div class="rightPart">
    <About />
    <Experience />
    <Projects />
    <Certifications />
  </div>
</template>

<script>
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";

export default {
  name: "CoverPage",
  components: {
    About,
    Experience,
    Projects,
    Certifications
  }
};
</script>

<style scoped>
#Projects {
  background: #fff;
  left: 30;
  width: 100%;
}

#projects {
  padding-left: 20px;
  font-size: 60px;
  padding-top: 50px;
  padding-left: 80px;
  margin-top: 20px;
  margin-left: 130px;
}

h3 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
  color: black;
}

#Project1 {
  width: 500px;
  border-color: #404040;
  margin-left: 500px;
  line-height: 1.3;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 30px;
}

.rightPart {
  text-align: left;
  width: 80%;
  right: 0;
  display: block;
  position: relative;
  z-index: 200;
}

.rightPart i {
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
  font-size: 1.5em;
}
</style>
