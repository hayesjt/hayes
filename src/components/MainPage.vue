<template>
  <div id="mainpage">
    <nav-bar></nav-bar>
    <about-me></about-me>
    <page-links></page-links>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/mainpage-components/AboutMe";

export default {
  name: "MainPage",
  components: {
    NavBar,
    'about-me': AboutMe,
    Footer
  }
}
</script>

<style scoped>

</style>