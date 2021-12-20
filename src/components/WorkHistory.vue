<template>
  <div id="workhistory">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/work-history-gif.gif"></b-img>
        <hr />
      </div>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  title: "Software Engineer",
  components: { NavBar },
};
</script>

<style scoped>
</style>