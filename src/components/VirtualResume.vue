<template>
  <div id="virtualresume">
    <nav-bar></nav-bar>

    <b-container class="content-container">

      <div class="title-block">
        <b-img src="../assets/virtual-resume-gif.gif"></b-img>
        <hr />
      </div>

      <b-row>
        <b-col cols="4">
          <b-img src="../assets/virtual_resume_pics/resume_headshot.gif" fluid></b-img>
        </b-col>
        <b-col cols="8">
          <p>stuff</p>
        </b-col>
      </b-row>

    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "VirtualResume",
  components: { NavBar },
};
</script>