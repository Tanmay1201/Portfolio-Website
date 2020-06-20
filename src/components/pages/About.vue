<template>
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
</template>

<script>
export default {

}
</script>

<style>
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


#IntroLines {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 1.8;
  color: grey;
}
#About{
    height:100vh
}
</style>