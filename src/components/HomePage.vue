<template>
      <div class="rightPart">
        <div id="About">
          <div class="name">
            <span id="firstName">TANMAY</span>
            <span id="lastName">MATHUR</span>
            <br />
          </div>
          <br />
          <br />
          <br />
          <br />
          <sub id="shortBio"
            >UNDERGRAD, COMPUTER SCIENCE, RAJASTHAN TECHNICAL UNIVERSITY,</sub
          >
          <a id="mailID" href="mailto:tanmaymathur4@gmail.com"
            >TANMAYMATHUR4@GMAIL.COM</a
          >
          <br />
          <br />
          <br />
          <p id="IntroLines">
            Hi, I am a senior at Rajasthan Technical University studying
            Computer Science.
            <br />My Interests are broadly in developing quality business
            driven, scalable softwares. <br />Along with that, I am enthusiastic
            and passionate about exploring disruptive technologies.
            <br />
            <br />I am currently working as a Software Development Engineering
            Intern at Metacube Software Pvt. Ltd.
          </p>

          <h3>NEWS</h3>
          <ul>
            <li>
              I am currently working on integrating apache kafka with my project
              "Music Streaming App".
            </li>
            <li>Made few PR's in CC-Chooser</li>
          </ul>
          <!-- <font-awesome-icon icon="fa-facebook" /> -->
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </div>

      <div id="Experience">
        <center>
        <span id="experience">EXPERIENCE</span>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
        <div id="metacubeco">
          <center>
            <img src="../assets/Metacube-Software-Logo.png" class="metacube" />
            <br />
            <span id="name"> Metacube </span><br /><br />
            <span id="duration"> Jan'20 - Present </span>
            <p>
              I am Currently an Intern at Metacube <br />Software Private
              Limited in Jaipur. I worked <br />on Spring Framework to develop
              and extend <br />current and new functionalities.
            </p>
            <br />
            <br />
          </center>
        </div>
        <div id="celebaltechco">
          <center>
            <img src="../assets/celebal-technologies.png" class="celebal" />
            <br />
            <span id="name"> Celebal </span><br /><br />
            <span id="duration"> Summer'19</span>
            <p>
              I am Currently an Intern at Metacube <br />Software Private
              Limited in Jaipur. I worked <br />on Spring Framework to develop
              and extend <br />current and new functionalities.
            </p>
            <br />
            <br />
          </center>
        </div>
        </center>
        <br />
        <br />
        <br />
      </div>
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
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  float: left;
}

#firstName {
  font-size: 50px;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#lastName {
  font-size: 50px;
  margin-left: 10px;

  color: skyblue;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#shortBio {
  font-size: 20px;
  color: grey;
  font-family: Georgia, "Times New Roman", Times, serif;
}

li {
  color: grey;
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 1.8;
}
#mailID {
  color: salmon;
  text-decoration: none;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.metacube {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-top: 30px;
  transition: transform 0.2s;
}

.metacube:hover {
  transform: scale(1.2);
}

.celebal {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-top: 30px;
  transition: transform 0.2s;
}

.celebal:hover {
  transform: scale(1.2);
}

#IntroLines {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 1.8;
  color: grey;
}

#Experience {
  left:0;
  background: #404040;
  color: whitesmoke;
  width: 100%;
}

#Projects {
  background: #fff;
  left: 30;
  width: 100%;
}
#experience {
  padding-left: 20px;
  font-size: 60px;
  padding-top: 50px;
  margin-top: 10px;
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
#metacubeco {
  background: #202020;
  width: 500px;
  line-height: 1.3;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 30px;
}

#Project1 {
  width: 500px;
  border-color: #404040;
  margin-left: 500px;
  line-height: 1.3;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 30px;
}
#metacubeco p {
  line-height: 1.7;
}
#metacubeco #name {
  font-size: 30px;
}

#metacubeco #duration {
  color: #3333ff;
}

#celebaltechco {
  margin-top: 40px;
  background: #202020;
  width: 500px;
  line-height: 1.3;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#celebaltechco p {
  line-height: 1.7;
}
#celebaltechco #name {
  font-size: 30px;
}

#celebaltechco #duration {
  color: #3333ff;
}

.rightPart {
    text-align: left;
    width: 80%;
    right: 0;
    display: block;
    position: relative;
    z-index: 200;
}


.profile_image:hover {
  transform: scale(1.2);
}
sub {
  font-size: 5px;
}


.rightPart i {
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
  font-size: 1.5em;
}

</style>
