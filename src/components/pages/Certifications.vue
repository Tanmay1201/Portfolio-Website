<template>
  <div>
    <div id="certifications">
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
  width: auto;
  height: auto;
}

#certification {
  font-size: 40px;
  margin-top: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.acicon {
  height: 150px;
  width: 150px;
  border-radius: 100px;
}
.ac {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding-top: 30px;
}

#RHCA {
  padding-top: 30px;
}

.sa {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding-top: 30px;
}

.rhcsaicon {
  height: 150px;
  width: 150px;
  border-radius: 100px;
}

#RHCSA {
  padding-top: 30px;
}

.icpcicon {
  height: 150px;
  width: 150px;
}

.acm {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding-top: 30px;
  padding-left: 30px;
}

#ICPC {
  padding-top: 30px;
}

#DL {
  padding-top: 30px;
}

.dlicon {
  height: 150px;
  width: 150px;
  border-radius: 100px;
}

.dl {
  height: 300px;
  width: 100%;
  max-width: 400px;
  padding-top: 30px;
  padding-left: 30px;
}

@media screen and (max-width: 850px) {
  .ac {
    width: auto;
    height: auto;
  }

  .sa {
    width: auto;
    height: auto;
  }

  .dl {
    height: auto;
  }

  .acm {
    width: auto;
    height: auto;
  }
}
</style>
