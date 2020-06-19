<template>
  <div>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js">
    </head>
    <div class="leftPart">
      <center>
        <img src="../assets/profilepicture.jpg" class="profile_image" alt="Profile Image"/>
        <h4> Tanmay </h4>
      </center>
      <a href="#"><i class="fas fa-asterisk"></i><span>About</span></a>
    </div>
    <div class="rightPart" style="margin-left:35%;padding:1px 16px;height:1000px;">
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

.leftPart{
  background: #2f323a;
  margin-top: none;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 400px;
  height: 100%;
}

.leftPart .profile_image{
  
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.leftPart h4{
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

.leftPart a{
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 5px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.leftPart a:hover{
  background: #19B3D3;
}

.leftPart i{
  padding-left: ;
}
</style>
