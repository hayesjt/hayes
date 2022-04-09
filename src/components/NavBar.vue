<template>
  <div id="navbar">

    <b-navbar id="navbar-custom" fixed="top" toggleable="sm">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">

          <b-nav-item to="/">HOME</b-nav-item>
          <b-nav-item to="/resume">RESUME</b-nav-item>
          <b-nav-item to="devprojects">DEVELOPMENT WORK</b-nav-item>
          <b-nav-item to="/volunteer">VOLUNTEER WORK</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#navbar-custom {
  background-color: #ffff !important;
  margin-bottom: 500px !important;
}
</style>