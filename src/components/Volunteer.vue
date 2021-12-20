<template>
  <div id="volunteer">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/volunteer-gif.gif"></b-img>
        <hr />
      </div>

      <b-row>
        <b-col cols="4">
          <b-img src="../assets/mars_and_me.png" fluid></b-img>
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/mars-gif.gif"></b-img>
          <hr />
          <h6>Roles:</h6>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="8">
          <b-img src="../assets/rsr-gif.gif"></b-img>
          <hr />
          <h6>Roles:</h6>
        </b-col>
        <b-col cols="4">
          <b-img src="../assets/leo_and_me.png" fluid alt="Fluid image"></b-img>
        </b-col>
      </b-row>
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
.section-titles {
  padding-bottom: 10px;
}

hr {
  margin-bottom: 10px;
}

.why {
  margin-top: 40px;
}
</style>