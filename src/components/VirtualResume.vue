<template>
<div id="virtualresume">
    <nav-bar></nav-bar>

    <b-container class="content-container">
        <b-row>
            <b-col class="large-title-space" cols="12">
                <b-img center src="../assets/virtual_resume_pics/haylee_name.gif"></b-img>
            </b-col>
            <b-col cols="12">
                <h5 class="center-text bottom-space-needed">
                    Maple Grove, MN | hay.design.lee@gmail | Linkedin | Github
                </h5>
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col cols="4">
                <b-img src="../assets/virtual_resume_pics/resume_headshot.gif" fluid></b-img>
            </b-col>
            <b-col cols="8">
              <main-heading source="../assets/virtual_resume_pics/objective.gif"/>
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
                <list-item icon="people-fill" listtext="Leadership & Mentorship" />
                <list-item icon="chat-left-dots-fill" listtext="Communication" />
                <list-item icon="suit-heart-fill" listtext="Team Work & Building Community" />
                <list-item icon="easel-fill" listtext="Design Thnking" />
                <list-item icon="eyeglasses" listtext="Detail-oriented" />
                <list-item icon="pencil-fill" listtext="Continuous Learning" />
            </b-col>
            <b-col cols="8">
                <b-img src="../assets/virtual_resume_pics/experience.gif"></b-img>
                <hr />
                <experience-title icon="briefcase-fill" title="Target | Engineer | Brooklyn Park, MN" />
                <experience-title icon="briefcase-fill" title="Target | Emerging Engineer | Minneapolis, MN" />
                <experience-title icon="briefcase-fill" title="Target | Store Planner | Minneapolis, MN" />
                <experience-title icon="briefcase-fill" title=" Cliq Studios | Designer | Edina, MN" />
                <experience-title icon="briefcase-fill" title="Luther Volkswagen | Receptionist | St. Louis Park, MN" />
                <experience-title icon="briefcase-fill" title="Chipotle | Manager | Multiple Locations, MN" />
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col cols="4">
                <b-img src="../assets/virtual_resume_pics/tech_skills.gif"></b-img>
                <hr />
                <list-item icon="gear-fill" listtext="Test Driven Development (Kotlin, Groovy, Spock, Python, JavaScript)" />
                <list-item icon="gear-fill" listtext="REST API's" />
                <list-item icon="gear-fill" listtext="Observibility, Metrics, & Alerting" />
                <list-item icon="gear-fill" listtext="Application Scaling (Kubernetes)" />
                <list-item icon="gear-fill" listtext="Version Control (Git)" />
                <list-item icon="gear-fill" listtext="Continuous Integration and Development" />
                <list-item icon="gear-fill" listtext="Security Compliance Experience (PCI & PII)" />
                <list-item icon="gear-fill" listtext="DevOps Practices" />
                <list-item icon="gear-fill" listtext="Dynamic Web Page Design" />
                <list-item icon="gear-fill" listtext="Debugging" />
                <list-item icon="gear-fill" listtext="Experience with Front End Lauguages & Frameworks (HTML, CSS, JavaScript, TypeScript, JSX, React, Vue)" />
                <list-item icon="gear-fill" listtext="Experience with Backend Lauguages & frameworks (Kotlin, Grovy, Ratpack, Spring Boot, NodeJS, Micronaut)" />
                <list-item icon="gear-fill" listtext="Experience with Databases (SQL, Radius)" />
                <list-item icon="gear-fill" listtext="Experience with Content Delivery Networks (Fastly)" />
                <list-item icon="gear-fill" listtext="Agile Software Development (Sprints, Product Ownership, etc.)" />
            </b-col>
            <b-col cols="8">
                <b-img src="../assets/virtual_resume_pics/education.gif"></b-img>
                <hr />
                <experience-title icon="pencil-fill" title="Full Stack Development Certification | Hackbright Academy | San Francisco, CA" />
                <experience-title icon="pencil-fill" title="Full Stack Development Certification | University of Minnesota (trimble) | Minneapolis, MN" />
                <experience-title icon="pencil-fill" title="Bacholres of Design in Architecture | University of Minnesota | Minneapolis, MN" />
                <experience-title icon="pencil-fill" title="Associates | Anoka Ramsey Community College | Coon Rapids, MN" />
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col cols="12">
                <b-img src="../assets/virtual_resume_pics/projects.gif"></b-img>
                <hr />
                <p>Checkout all my projects here.</p>
            </b-col>
        </b-row>
    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ListItem from '@/components/universal-components/ListItem.vue';
import ExperienceTitle from '@/components/universal-components/ExperienceTitle.vue';


export default {
    name: "VirtualResume",
    components: {
        NavBar,
        ListItem,
        ExperienceTitle
    },
};
</script>
