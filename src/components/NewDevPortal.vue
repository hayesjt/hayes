<template>
  <div id="newdevportal">
    <nav-bar></nav-bar>
  
      <b-container>

      <div class="title-block">
        <b-img src="../assets/new-dev-gif.gif"></b-img>
        <hr />
      </div>

      <div class="title-block">
        <b-img src="../assets/knowledge-gif.gif"></b-img>
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
  name: "NewDevPortal",
  components: {
    NavBar,
    Footer
    }
}
</script>

<style scoped>

</style>