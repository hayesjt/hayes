<template>
<div id="projecttile">
    <nav-bar></nav-bar>

    <b-container class="content-container">

        <div>
            <b-card-group deck>
                <b-card :header=header header-tag="header" :footer=footer footer-tag="footer" :title=title>
                    <b-card-text>{{ cardtext }}</b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-card-group>
        </div>

    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
export default {
    name: "ProjectTile",
    props: {
        header: String,
        footer: String,
        title: String,
        cardtext: String,
    },
    components: {},
};
</script>

<style scoped>
</style>
