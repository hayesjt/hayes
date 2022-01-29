<template>
  <div id="virtualresume">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <b-row>
        <b-col class="large-title-space" cols="12">
          <b-img
            center
            src="../assets/virtual_resume_pics/haylee_name.gif"
          ></b-img>
        </b-col>
        <b-col cols="12">
          <h5 class="center-text bottom-space-needed">
            Maple Grove, MN | hay.design.lee@gmail | Linkedin | Github
          </h5>
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="4">
          <b-img
            src="../assets/virtual_resume_pics/resume_headshot.gif"
            fluid
          ></b-img>
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/virtual_resume_pics/objective.gif"></b-img>
          <hr />
          <p>
            Creative and efficacious young professional who thrives in a fast
            paced and collaborative environment. Seeking a position that
            challenges my skills in full stack development and pushes my limits
            to expand my knowledge. Passionate about simplifying complicated
            problems, collecting data, and designing strong client-side
            applications. Looking to leverage past design experience and bring a
            new prospective to a technical environment.
          </p>
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="4">
          <b-img src="../assets/virtual_resume_pics/core_skills.gif"></b-img>
          <hr />
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/virtual_resume_pics/experience.gif"></b-img>
          <hr />
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="4">
          <b-img src="../assets/virtual_resume_pics/tech_skills.gif"></b-img>
          <hr />
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/virtual_resume_pics/education.gif"></b-img>
          <hr />
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="12">
          <b-img src="../assets/virtual_resume_pics/projects.gif"></b-img>
          <hr />
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "VirtualResume",
  components: { NavBar },
};
</script>