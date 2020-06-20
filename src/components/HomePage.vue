<template>
      <div class="rightPart">
        <About/>
        <Experience/>
      
      <div id="Projects">
        <span id="projects">PROJECTS</span>
        <div id="Project1">
          <span>Music Streaming App</span>
        </div>
        <div id="Project2">
          <span>Hospital Finder</span>
        </div>
      </div>
      </div>

</template>

<script>
import About from './pages/About'
import Experience from './pages/Experience'

export default {
  name:"HoverPage",
  components:{
    About,
    Experience
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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


/* 
sub {
  font-size: 5px;
} */


.rightPart i {
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
  font-size: 1.5em;
}

</style>
