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
      Hi, I am a senior at Rajasthan Technical University studying Computer
      Science.
      <br />My Interests are broadly in developing quality business driven,
      scalable softwares. <br />Along with that, I am enthusiastic and
      passionate about exploring disruptive technologies.
      <br />
      <br />I am currently working as a Software Development Engineering Intern
      at Metacube Software Pvt. Ltd.
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
    <a href="https://www.linkedin.com/in/mathurtanmay4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBUtmusExTN2bAnzNx%2FUYTQ%3D%3D"> <font-awesome-icon :icon="['fab', 'linkedin']" /> </a>
    <a href="https://trailblazer.me/id/tmathur9"><font-awesome-icon :icon="['fab', 'salesforce']" size="lg"/> </a>
    <a href="https://github.com/Tanmay1201"><font-awesome-icon :icon="['fab', 'github']" size="lg"/> </a>
    <a href="https://www.instagram.com/_j_e_r_y_y_/"><font-awesome-icon :icon="['fab', 'instagram']" /></a> 
    <a href="https://www.facebook.com/tanmay.mathur.31508"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
  </div>
</template>

<script>
export default {};
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
#About {
  height: 100vh;
  padding-left: 20px;
  padding-top: 30px;
}
</style>
