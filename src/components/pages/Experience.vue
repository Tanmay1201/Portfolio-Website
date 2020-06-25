<template>
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
          <img src="@/assets/Metacube-Software-Logo.png" class="metacube" />
          <br />
          <span id="name">Metacube</span>
          <br />
          <br />
          <span id="duration">Jan'20 - Present</span>
          <p>
            I am Currently an Intern at Metacube
            <br />Software Private Limited
            in Jaipur. I worked
            <br />on Spring Framework to develop and extend
            <br />current and new functionalities.
          </p>
          <br />
          <br />
        </center>
      </div>
      <div id="celebaltechco">
        <center>
          <img src="@/assets/celebal-technologies.png" class="celebal" />
          <br />
          <span id="name">Celebal</span>
          <br />
          <br />
          <span id="duration">Summer'19</span>
          <p>
            I interned in the DevOps team. Developed and maintained
            <br />automated CI/CD pipelines for code deployment.
            <br />Built and deployed Docker containers for implementing
            <br />Microservice Architecture from Monolithic
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
</template>

<script>
export default {};
</script>

<style>
#Experience {
  left: 0;
  background: #404040;
  padding-top: 50px;
  color: whitesmoke;
  width: auto;
  height: auto;
}

#experience {
  font-size: 40px;
  margin-top: 10px;
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

#metacubeco {
  background: #202020;
  width: 500px;
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

@media screen and (max-width: 850px) {
  #celebaltechco {
    height: auto;
    width: auto;
  }
  #metacubeco {
    height: auto;
    width: auto;
  }
}
</style>
