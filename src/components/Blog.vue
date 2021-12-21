<template>
  <div id="blog">
    <nav-bar></nav-bar>
    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/blog-gif.gif"></b-img>
        <hr />
      </div>

      <p>
        Hello again, welcome to my personal blog, thanks for checking it out!
      </p>

      <p>
        This blog will have a wide range of topics such as education, software
        engineering, mental health, and any tip I have picked up along my
        software engineering journey.
      </p>

      <p>I release a new content every two weeks. Hope you enjoy!</p>

      <div class="title-block title-space">
        <b-img src="../assets/most-current-gif.gif"></b-img>
        <hr />
      </div>

      <recent-post></recent-post>

      <div class="title-block title-space">
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
import RecentPost from "./blog-components/RecentPost.vue";

export default {
  components: {
    NavBar,
    Footer,
    RecentPost,
  },
};
</script>

<style scoped>
</style>