<template>
  <div class="Projects">
    <center>
      <span id="projects">PROJECTS</span>
    </center>
    <div id="projectcontainer1">
      <div id="Project1">
        <center>
          <span id="project1name">Music Streaming App</span>
          <p>
            This is a distributed Application following Microservices
            pattern.<br />
            his app provides continuous live streaming of music to user. (Live
            Streaming <br />with the help of Kafka)Have features like
            Download/offline,<br />
            playlists, social sharings.To be implemented - Help users to
            <br />discover music by giving a quality recommendation.
          </p>
        </center>
      </div>
      <div id="Project2">
        <center>
          <span id="project2name">Hospital Finder</span>
          <p>
            This project deals with searching of hospitals which are <br />
            nearest to the GPS location of the user.It provides functionality
            <br />
            to book an appointment with the concerned hospital and paying bill
            <br />
            online.User can filter hospitals according to the disease they are
            <br />suffering from or from their budget.
          </p>
        </center>
      </div>
    </div>
    <div id="projectcontainer1">
      <div id="Project3">
        <center>
          <span id="project3name">Hospital Finder</span>
          <p>
            This project deals with searching of hospitals which are <br />
            nearest to the GPS location of the user.It provides functionality
            <br />
            to book an appointment with the concerned hospital and paying bill
            <br />
            online.User can filter hospitals according to the disease they are
            <br />suffering from or from their budget.
          </p>
        </center>
      </div>
      <div id="Project4">
        <center>
          <span id="project4name">Hospital Finder</span>
          <p>
            This project deals with searching of hospitals which are <br />
            nearest to the GPS location of the user.It provides functionality
            <br />
            to book an appointment with the concerned hospital and paying bill
            <br />
            online.User can filter hospitals according to the disease they are
            <br />suffering from or from their budget.
          </p>
        </center>
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
  left: 0;
  padding-top: 50px;
  color: #000000;
  width: 100%;
}

#projects {
  font-size: 60px;
  margin-top: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#Project1 {
  width: 400px;
  height: 300px;
  margin-left: 20px;
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
}
</style>
