<template>
<div id="newdevportal">
    <nav-bar></nav-bar>

    <b-container class="content-container">

        <div class="title-block">
            <b-img src="../assets/new-dev-gif.gif"></b-img>
            <hr />
        </div>

        <dev-resource-card header="Testing" title="Test Driven Developmnent" cardtext="About" footer="something" />
        <dev-resource-card header="Web Development" title="Single Page Applications" cardtext="About" footer="something" />
        <dev-resource-card header="CIDI" title="Automated Pipelines" cardtext="About" footer="something" />
        <dev-resource-card header="Observability" title="Metrics" cardtext="About" footer="something" />
        <dev-resource-card header="Version Control" title="Git Hub" cardtext="About" footer="something" />
        <dev-resource-card header="Best Practices" title="Coding Best Practices" cardtext="About" footer="something" />

    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DevResourceCard from '@/components/dev-portal-comoonents/DevResourceCard.vue';

export default {
    name: "NewDevPortal",
    components: {
        NavBar,
        Footer,
        DevResourceCard
    }
}
</script>

<sty
        DevResourceCardle scoped>

</style>
