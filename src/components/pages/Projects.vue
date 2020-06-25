<template>
  <div class="Projects">
    <center>
      <span id="projects">PROJECTS</span>
    </center>
    <div id="projectcontainer">
      <div id="Project1">
        <center>
          <font-awesome-icon :icon="['fas', 'music']" size="1x" :style="{ color: 'red' }" />
          <span id="project1name">Music Streaming App</span>
        </center>
        <br />
        <p id="con1">
          This is a distributed Application following Microservices
          pattern. This app provides continuous live streaming of music to user. Have features like
          Download/offline,
          playlists, social sharings.
          <b>To be implemented</b> - Help users to
          discover music by giving a quality recommendation.
        </p>
        <p class="date1">May'20-Present</p>
      </div>
      <div id="Project2">
        <center>
          <font-awesome-icon :icon="['fas', 'hospital']" size="1x" :style="{ color: 'blue' }" />
          <span id="project2name">Hospital Finder</span>
        </center>
        <br />
        <p id="con2">
          This project deals with searching of hospitals which are
          nearest to the GPS location of the user.It provides functionality
          to book an appointment with the concerned hospital and paying bill
          online.User can filter hospitals according to the disease they are
          suffering from or from their budget.
        </p>
        <p class="date2">August'19-Dec'19</p>
      </div>
    </div>
    <div id="projectcontainer1">
      <div id="Project3">
        <center>
          <font-awesome-icon
            :icon="['fas', 'shopping-cart']"
            size="1x"
            :style="{ color: 'brown' }"
          />
          <span id="project3name">E-Commerce Website</span>
        </center>
        <br />
        <p id="con3">
          This is an E-Commerce website in which user can view,rate and purchase the product while
          the Admin has rights to create, read, update and delete. PayPal is integrated
          as the payment gateway.
        </p>
        <p class="date3">Jan'19-Apr'19</p>
      </div>
      <div id="Project4">
        <center>
          <font-awesome-icon :icon="['fas', 'gamepad']" size="1x" :style="{ color: 'orange' }" />
          <span id="project4name">Tic Tac Toe</span>
        </center>
        <br />
        <p id="con4">
          This Project is a simple Tic Tac Toe Game built using VueJS and vueX. A two player game which resets after winning/draw
          of match. Currently it is of 3*3 grid, but can be increased upto 9*9 grid. It can be played either with the computer
          or with another opponent.
        </p>
        <p class="date4">Sep'19-Feb'20</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Projects {
  background: #e0e0e0;
  padding-top: 50px;
  color: #000000;
  width: 100%;
}

#projects {
  font-size: 40px;
  margin-top: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#Project1 {
  width: 400px;
  height: 300px;
  border-style: solid;
  border-color: #ffff33;
  background: #ffffff;
}

#Project2 {
  border-style: solid;
  border-color: #ff66ff;
  width: 400px;
  height: 300px;
  background: #ffffff;
}

#Project3 {
  border-style: solid;
  border-color: #66ff66;
  width: 400px;
  height: 300px;
  background: #ffffff;
}

#Project4 {
  border-style: solid;
  border-color: #ff0000;
  width: 400px;
  height: 300px;
  background: #ffffff;
}
#projectcontainer,
#projectcontainer1 {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

#projectcontainer div,
#projectcontainer1 div {
  padding: 20px;
  margin: 20px;
}

#project1name,
#project2name,
#project3name,
#project4name {
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  padding-left: 35px;
}

#con1 {
  line-height: 1.8;
  text-align: justify;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.date1 {
  position: relative;
  left: 0;
  bottom: 0;
  text-align: right;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #ff3333;
}

#con2 {
  text-align: justify;
  line-height: 1.8;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.date2 {
  position: relative;
  left: 0;
  bottom: 0;
  text-align: right;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #808080;
}

#con3 {
  line-height: 1.8;
  color: #000000;
  text-align: justify;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.date3 {
  position: relative;
  left: 0;
  bottom: 0;
  text-align: right;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #ff007f;
}

#con4 {
  line-height: 1.8;
  text-align: justify;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.date4 {
  position: relative;
  left: 0;
  bottom: 0;
  text-align: right;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #00ff00;
}
@media screen and (max-width: 850px) {
  .Projects {
    height: auto;
    width: auto;
  }

  #Project1 {
    height: auto;
    width: auto;
  }
  #Project2 {
    height: auto;
    width: auto;
  }
  #Project3 {
    height: auto;
    width: auto;
  }
  #Project4 {
    height: auto;
    width: auto;
  }
  #projectcontainer,
  #projectcontainer1 {
    display: block;
    justify-content: center;
    padding: 10px;
  }
}
</style>
