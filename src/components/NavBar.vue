<template>
  <div id="navbar">

    <b-navbar id="navbar-custom" fixed="top" toggleable="sm">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">

          <!-- Link to Home - MainPage.vue -->
          <b-nav-item to="/">[ home ]</b-nav-item>

          <!-- Link Dropdown for Work History - WorkHistory.vue -->
          <b-nav-item-dropdown text="[ professional ]" right>
            <b-dropdown-item to="/virtualresume">[ virtual_resume ]</b-dropdown-item>
            <b-dropdown-item to="/workhistory">[ full_work_history ]</b-dropdown-item>
            <b-dropdown-item to="/techvideogallery">[ development_gallery ]</b-dropdown-item>
            <b-dropdown-item to="/archgallery">[ design_gallery ]</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Link to Volunteer work - Volunteer.vue -->
          <b-nav-item to="/volunteerwork">[ volunteer ]</b-nav-item>


          <!-- Link to Blog - Blog.vue -->
          <b-nav-item to="/blog">[ blog ]</b-nav-item>

          <!-- Link to Developer Portal - NewDevPortal.vue -->
          <b-nav-item to="/newdevportal">[ new_dev_resources ]</b-nav-item>

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