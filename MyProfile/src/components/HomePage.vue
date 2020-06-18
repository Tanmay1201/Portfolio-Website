<template>
  <div>
    <div class="leftPart">
      <img src="../assets/profilepicture.jpg" alt="profile" />
    </div>
    <div class="rightPart">
      <div id="Introduction">
        <span id="firstName"> TANMAY </span>
        <span id="lastName"> MATHUR </span><br />

        <span id="shortBio">
          UNDERGRAD, COMPUTER SCIENCE, RAJASTHAN TECHNICAL UNIVERSITY,
        </span>
        <a id="mailID" href="mailto:tanmaymathur4@gmail.com"
          >TANMAYMATHUR4@GMAIL.COM</a
        >

        <p id="IntroLines">
          Hi, I am a senior at Rajasthan Technical University studying Computer
          Science. <br />
          My Interests are broadly in developing quality business driven,
          scalable softwares. Along with that, I am enthusiastic and passionate
          about exploring disruptive technologies.
          <br />
          <br />

          I am currently working as a Software Development Engineering Intern at
          Metacube Software Pvt. Ltd.
        </p>

        <h3>
          NEWS
        </h3>
        <ul>
          <li>
            I am currently working on integrating apache kafka with my project
            "Music Straming App".
          </li>
          <li>Made few PR's in CC-Chooser</li>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#firstName {
  font-size: 50px;
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#lastName {
  font-size: 50px;
  color: skyblue;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#shortBio {
  font-size: 20px;
  color: grey;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#mailID {
  color: salmon;
  text-decoration: none;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
