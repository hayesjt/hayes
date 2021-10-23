<template>
  <div id="mainpage">
    <nav-bar></nav-bar>
    <about-me></about-me>
    <page-links></page-links>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/mainpage-components/AboutMe";
import PageLinks from "@/components/mainpage-components/PageLinks";
export default {
  name: "MainPage",
  components: {
    NavBar,
    'about-me': AboutMe,
    'page-links': PageLinks
  },
  data: function () {
    return {
      name: 'haylee'
    }
  }
}
</script>

<style scoped>

</style>