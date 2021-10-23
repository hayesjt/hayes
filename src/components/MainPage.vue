<template>
  <div id="mainpage">
    <nav-bar></nav-bar>
    <h2>The Main Page</h2>
    <p>my name is {{ name }}</p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "MainPage",
  components: {NavBar},
  data: function () {
    return {
      name: 'haylee'
    }
  }
}
</script>

<style scoped>

</style>