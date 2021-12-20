<template>
  <div id="archgallery">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/design-gallery-gif.gif"></b-img>
        <hr />
      </div>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "ArchGallery",
  components: { NavBar },
};
</script>
