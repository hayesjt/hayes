<template>
  <div id="blog">
    <nav-bar></nav-bar>
      <b-container class="content-container">

      <div class="title-block">
        <b-img src="../assets/blog-gif.gif"></b-img>
        <hr />
      </div>

      <div class="title-block">
        <b-img src="../assets/most-current-gif.gif"></b-img>
        <hr />
      </div>

      <div class="title-block">
        <b-img src="../assets/past-gif.gif"></b-img>
        <hr />
      </div>

    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
</style>