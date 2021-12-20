<template>
  <div id="footer">
    <b-navbar id="footer-custom" fixed="bottom" toggleable="sm">
      <b-navbar-nav class="mx-auto">
        <b-row>
          <b-col> Copyright @ 2022</b-col>

          <b-col> <b-img src="../assets/logo.gif"></b-img> </b-col>

          <b-col>
            <div class="h2 mb-0">
              <b-icon class="icon-left" icon="linkedin"></b-icon>
              <b-icon class="icon-right" icon="github"></b-icon>
            </div>
          </b-col>
        </b-row>
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
  padding-top: 50px;
}
.icon-left {
  margin-right: 5px;
}
.icon-right {
  margin-left: 5px;
}
</style>