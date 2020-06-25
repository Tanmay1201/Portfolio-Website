<template>
  <div class="Projects">
    <center>
      <span id="projects">PROJECTS</span>
    </center>
    <div id="projectcontainer1">
      <div id="Project1">
        <center>
          <font-awesome-icon :icon="['fas', 'music']" size="1x" :style="{ color: 'red' }" />
          <span id="project1name">Music Streaming App</span>
        </center>
        <center>
          <br />
          <span id="con1">
            This is a distributed Application following Microservices
            pattern. This app provides continuous live streaming of music to user. Have features like
            Download/offline,
            playlists, social sharings.
            <br />To be implemented - Help users to
            discover music by giving a quality recommendation.
          </span>
        </center>
        <span id="date1">May'20-Present</span>
      </div>
      <div id="Project2">
        <center>
          <font-awesome-icon :icon="['fas', 'hospital']" size="1x" :style="{ color: 'blue' }" />
          <span id="project2name">Hospital Finder</span>
        </center>
        <center>
          <br />
          <span id="con2">
            This project deals with searching of hospitals which are
            nearest to the GPS location of the user.It provides functionality
            to book an appointment with the concerned hospital and paying bill
            online.User can filter hospitals according to the disease they are
            suffering from or from their budget.
          </span>
        </center>
        <span id="date2">August'19-Dec'19</span>
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
        <center>
          <br />
          <span id="con3">
            This is an E-Commerce website in which user can view,rate and purchase the product while
            the Admin has rights to create, read, update and delete. PayPal is integrated
            as the payment gateway.
          </span>
        </center>
        <span id="date3">Jan'19-Apr'19</span>
      </div>
      <div id="Project4">
        <center>
          <font-awesome-icon :icon="['fas', 'gamepad']" size="1x" :style="{ color: 'orange' }" />
          <span id="project4name">Tic Tac Toe</span>
        </center>
        <center>
          <br />
          <span id="con4">
            This Project is a simple Tic Tac Toe Game built using VueJS and vueX. A two player game which resets after winning/draw
            of match. Currently it is of 3*3 grid, but can be increased upto 9*9 grid. It can be played either with the computer
            or with another opponent.
          </span>
        </center>
        <span id="date4">Sep'19-Feb'20</span>
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

#projectcontainer,
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
  padding: 20px;
  line-height: 1.8;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#date1 {
  float: right;
  color: #ff3333;
  padding-top: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#con2 {
  padding: 20px;
  line-height: 1.8;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#date2 {
  float: right;
  color: #808080;
  padding-top: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#con3 {
  padding: 20px;
  line-height: 1.8;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#date3 {
  float: right;
  color: #ff007f;
  padding-top: 80px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#con4 {
  padding: 20px;
  line-height: 1.8;
  color: #000000;
  font-family: Georgia, "Times New Roman", Times, serif;
}
#date4 {
  float: right;
  color: #00ff00;
  padding-top: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
@media screen and (max-width: 850px) {
  .Projects {
    height: auto;
    width: auto;
  }

  #Project1 {
    height: auto;
  }
  #Project2 {
    height: auto;
  }
  #Project3 {
    height: auto;
  }
  #Project4 {
    height: auto;
  }
}
</style>
