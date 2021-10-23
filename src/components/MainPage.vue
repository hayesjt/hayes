<template>
  <div id="mainpage">
    <h2>The Main Page</h2>
    <p>my name is {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data: function () {
    return {
      name: 'haylee'
    }
  }
}
</script>

<style scoped>

</style>