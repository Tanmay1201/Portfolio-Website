<template>
  <div class="contact">
    <modal ref="contact-Modal" />
    <center>
      <span id="con">CONTACT</span>
    </center>
    <div id="contactblock">
      <center>
        <div id="cont">
          <span id="finaltext">
            Thank you for reaching out to me!
            <br />So let's share thoughts,talk
            about life.
            <br />May be let's connect over cup of coffee.
            <br />
            <br />Please feel free to write out to me, if you want to discuss about
            anything or everything :)
          </span>
        </div>
      </center>
    </div>
    <center>
      <button class="button" type="button" @click="showModal()">Click To Reach Tanmay</button>
    </center>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import modal from "@/components/modal.vue";
export default {
  name: "contacts",
  components: {
    modal
  },
  methods: {
    showModal: function() {
      this.$refs["contact-Modal"].showModal();
    }
  }
  // mounted() {
  //   this.$refs["contact-Modal"].closeByEvent();
  // }
};
</script>

<style>
.contact {
  padding-top: 50px;
  width: 100%;
  background: #e0e0e0;
  height: auto;
}

#con {
  font-size: 50px;
  margin-top: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

#cont {
  border-style: solid;
  border-color: #66ff66;
  width: 400px;
  height: 220px;
  background: #ffffff;
}
#contactblock {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
#contactblock div {
  padding: 20px;
  margin: 20px;
}
#finaltext {
  color: #3333ff;
  font-family: cursive;
  font-size: 20px;
}

button {
  color: #3333ff;
  border: 2px solid #4caf50;
  font-size: 24px;
  transition-duration: 0.4s;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

@media screen and (max-width: 850px) {
  .contact {
    height: auto;
    width: 100%;
  }
  #cont {
    height: auto;
    width: auto;
  }
}
</style>
