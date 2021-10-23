<template>
  <div id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/workhistory">Work History</router-link>

    <div>
      <!-- As a link -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">BootstrapVue</b-navbar-brand>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>