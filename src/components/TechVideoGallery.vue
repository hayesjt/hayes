<template>
<div id="techvideogallery">
    <nav-bar></nav-bar>

    <b-container class="content-container">

        <b-img src="../assets/headers/dev_project_header.png" fluid-grow></b-img>


        <b-row class="title-space">
            <b-col cols="6">
                <project-tiles title="Project 1" header="year" footer="Tech used" cardtext="about" />
            </b-col>
            <b-col cols="6">
                <project-tiles title="Project 2" header="year" footer="Tech used" cardtext="about" />
            </b-col>
        </b-row>

    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ProjectTiles from './resume-components/ProjectTiles.vue';
import Footer from "@/components/Footer";

export default {
    name: "TechVideoGallery",
    components: {
        NavBar,
        ProjectTiles,
        Footer
    },
};
</script>
