<template>
  <div id="footer">
    <b-navbar id="footer-custom" fixed="bottom" toggleable="sm">
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="https://www.linkedin.com/in/hayleetk/"
          ><b-icon class="nav-icon" icon="linkedin"></b-icon
        ></b-nav-item>
        <b-nav-item href="https://github.com/haylee430"
          ><b-icon href="" class="nav-icon" icon="github"></b-icon
        ></b-nav-item>
        <b-nav-item href="mailto:hay.design.lee@gmail.com"
          ><b-icon href="" class="nav-icon" icon="envelope-fill"></b-icon
        ></b-nav-item>

        <b-nav-text class="nav-icon">Copyright @ 2022</b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
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