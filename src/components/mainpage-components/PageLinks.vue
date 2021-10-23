<template>

  <b-container class="page-links">
    <b-row>
      <b-col cols="12">

        <b-tabs content-class="mt-3" lazy>
          <b-tab title="[ check out my work history ]">
            <b-alert variant="secondary" show>I'm lazy mounted!</b-alert>
          </b-tab>
          <b-tab title="[ check out my blog ]">
            <b-alert variant="secondary" show>I'm lazy mounted too!</b-alert>
          </b-tab>
          <b-tab title="[ check out the new developer portal ]">
            <b-alert variant="secondary" show>I'm lazy mounted too!</b-alert>
          </b-tab>
        </b-tabs>

      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  name: "PageLinks"
}
</script>

<style scoped>

</style>