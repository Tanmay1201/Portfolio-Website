<template>
  <div class="leftPart">
    <center>
      <img
        src="../assets/profilepicture.jpg"
        class="profile_image"
        alt="Profile Image"
      />
      <h4>Tanmay</h4>
    </center>
    <a href="#About">
      <i class="fas fa-asterisk"></i>
      <span>About</span>
    </a>
    <a href="#Experience">
      <i class="fas fa-asterisk"></i>
      <span>Experience</span>
    </a>
    <a href="#projects">
      <i class="fas fa-asterisk"></i>
      <span>Projects</span>
    </a>
    <a href="#certifications">
      <i class="fas fa-asterisk"></i>
      <span>Certifications</span>
    </a>
    <a href="#">
      <i class="fas fa-asterisk"></i>
      <span>Contact</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile_image:hover {
  transform: scale(1.2);
}
.leftPart {
  background: #0080ff;
  margin-top: none;
  /* padding-top: 30px; */
  display: block;
  position: sticky;
  left: 0;
  top: 0;
  width: 20%;
  height: 100vh;
  z-index: 200;
}
.leftPart ::after {
  display: table;
  clear: both;
}
.leftPart .profile_image {
  padding-top: 40px;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 10px;
}
.leftPart h4 {
  color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}

.leftPart a {
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 5px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
  transition: transform 0.2s;
}

.leftPart a:hover {
  background: #99ccff;
}
.leftPart i {
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
  font-size: 1.5em;
}
</style>
