<template>
    <b-navbar id="footer-custom" fixed="bottom" toggleable="sm">
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="https://www.linkedin.com/in/hayesjasperthomas/"
          ><b-icon class="nav-icon" icon="linkedin"></b-icon
        ></b-nav-item>
        <b-nav-item href="https://github.com/hayesjt"
          ><b-icon class="nav-icon" icon="github"></b-icon
        ></b-nav-item>
        <b-nav-item href="mailto:hayesjasperthomas@gmail.com"
          ><b-icon class="nav-icon" icon="envelope-fill"></b-icon
        ></b-nav-item>

        <b-nav-text class="nav-icon">Copyright @ 2023</b-nav-text>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer-custom {
  background-color: #ffff !important;
  margin-top: 50px;
}
</style>

