<template>
  <div class="leftPart">
    <center>
      <img src="../assets/pp.jpg" class="profile_image" alt="Profile Image" />
    </center>
    <center>
      <a href="#About">About</a>
      <a href="#Experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </center>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile_image:hover {
  transform: scale(1.2);
}
.leftPart .profile_image {
  height: 150px;
  width: 150px;
  border-radius: 100px;
  border: 4px solid #ccffff;
  margin-bottom: 10px;
  margin-top: 80px;
}
</style>
