<template>
  <div id="workhistory">
    <nav-bar></nav-bar>
    <h2>The Work History Page</h2>
    <p>my job title is {{ title }}</p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  title: "Software Engineer",
  components: {NavBar},
}
</script>

<style scoped>

</style>