<template>
  <div id = "main-container">
    <SideNav/>
    <HomePage/>
  </div>
</template>

<script>
import SideNav from './SideNav'
import HomePage from './HomePage'

export default {
    name:"BaseLayout",
    components:{
        SideNav,
        HomePage
    }
}
</script>

<style>
#main-container{
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    position: absolute;
}
</style>