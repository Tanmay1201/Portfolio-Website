<template>
  <div id="main-container">
    <SideNav />
    <HomePage />
  </div>
</template>

<script>
import SideNav from "./SideNav";
import HomePage from "./HomePage";

export default {
  name: "BaseLayout",
  components: {
    SideNav,
    HomePage
  }
};
</script>

<style>
.leftPart {
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #3399ff;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.leftPart span {
  color: #ccffff;
  font-size: 15px;
  padding: 16px;
}
.leftPart a {
  display: block;
  color: #ccffff;
  padding: 16px;
  text-decoration: none;
  font-size: 15px;
  transition: background-color 0.5s;
}
.leftPart a:hover:not(.active) {
  transition: 0.5;
  background-color: gold;
}
div.rightPart {
  margin-left: 280px;
  padding: 1px 16px;
  height: 1000px;
}
@media screen and (max-width: 850px) {
  .leftPart {
    width: 100%;
    height: auto;
    position: relative;
  }
  .leftPart a {
    position: relative;
    float: right;
    font-size: 14px;
  }
  .profile_image {
    display: none;
  }
  div.rightPart {
    margin-left: 0;
    width: 100%;
  }
  .contact {
    height: auto;
    width: auto;
  }
}

@media screen and (max-width: 400px) {
  .leftPart a {
    font-size: 10px;
    text-align: center;
    float: none;
  }
}
</style>
