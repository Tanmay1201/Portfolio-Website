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
            <img src="@/assets/celebal-technologies.png" class="celebal" />
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
</template>

<script>
export default {

}
</script>

<style>
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

#experience {
  padding-left: 20px;
  font-size: 60px;
  padding-top: 50px;
  margin-top: 10px;
}

#Experience {
  left:0;
  background: #404040;
  color: whitesmoke;
  width: 100%;
  height: 100vh;
  overflow-y:scroll
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
</style>