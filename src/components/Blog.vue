<template>
  <div id="blog">
    <nav-bar></nav-bar>
    <h2>The Blog Page</h2>
    <p>My blog is {{ coolword }}</p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},
  coolword: 'cool'
}
</script>

<style scoped>

</style>