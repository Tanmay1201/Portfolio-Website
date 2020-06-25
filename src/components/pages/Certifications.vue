<template>
  <div>
    <div id="certifications">
      <center>
        <center>
          <span id="certification">CERTIFICATIONS</span>
        </center>
        <div id="RHCA">
          <center>
            <img src="../../assets/ansible.png" class="acicon" />
            <img src="../../assets/ansiblecertificate.jpg" class="ac" />
          </center>
        </div>
        <br />
        <div id="RHCSA">
          <center>
            <img src="../../assets/RHCSA.jpg" class="rhcsaicon" />
            <img src="../../assets/rhcsacertificate.jpg" class="sa" />
          </center>
        </div>
        <div id="ICPC">
          <center>
            <img src="../../assets/icpclogo.png" class="icpcicon" />
            <img src="../../assets/acmicpc.jpg" class="acm" />
          </center>
        </div>
        <div id="DL">
          <center>
            <img src="../../assets/deeplearning.jpeg" class="dlicon" />
            <img src="../../assets/DLcertificate-1.jpg" class="dl" />
          </center>
        </div>
      </center>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style>
#certifications {
  padding-top: 50px;
  width: 50%;
  height: auto;
  margin-left: 300px;
}

#certification {
  font-size: 30px;
  margin-top: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.acicon {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  padding: 20px;
}
.ac {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

#RHCA {
  object-fit: cover;
  border-style: solid;
  border-color: #ff0000;
  width: auto;
  margin-top: 30px;
}

.sa {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.rhcsaicon {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  padding: 20px;
}

#RHCSA {
  border-style: solid;
  border-color: greenyellow;
  padding-top: 30px;
}

.icpcicon {
  padding: 20px;
  height: 150px;
  width: 150px;
}

.acm {
  padding: 20px;
  height: 300px;
  width: 100%;
  max-width: 400px;
}

#ICPC {
  border-style: solid;
  border-color: pink;
  margin-top: 30px;
}

#DL {
  border-style: solid;
  border-color: blueviolet;
  margin-top: 30px;
}

.dlicon {
  padding: 20px;
  height: 150px;
  width: 150px;
  border-radius: 100px;
}

.dl {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

@media screen and (max-width: 850px) {
  .acicon {
    height: auto;
    width: 30%;
    padding-top: 20px;
  }
  .ac {
    width: 60%;
    height: auto;
    padding: 20px;
  }

  #certifications {
    padding-top: 50px;
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  #RHCA {
    width: 100%;
  }

  .rhcsaicon {
    height: auto;
    width: 30%;
    padding-top: 20px;
  }
  .sa {
    width: 60%;
    height: auto;
    padding: 20px;
  }

  .dlicon {
    height: auto;
    width: 30%;
    padding-top: 20px;
  }
  .dl {
    height: auto;
    width: 60%;
    padding: 20px;
  }

  .icpcicon {
    height: auto;
    width: 30%;
    padding-top: 20px;
  }
  .acm {
    width: 60%;
    height: auto;
    padding: 20px;
  }
}
</style>
