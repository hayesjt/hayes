<template>
<div id="virtualresume">
    <nav-bar></nav-bar>

    <b-container class="content-container">

        <b-row class="large-title-space">
            <b-col cols="4">
                <b-img src="../assets/virtual_resume_pics/resume_headshot.gif" fluid></b-img>
            </b-col>
            <b-col cols="8">
                <b-row>
                    <b-col cols="12">
                        <b-img center src="../assets/virtual_resume_pics/haylee_name.gif"></b-img>
                    </b-col>
                    <b-col cols="12">
                        <h5 class="center-text bottom-space-needed">
                            Maple Grove, MN | hay.design.lee@gmail | Linkedin | Github
                        </h5>

                        <b-img class="large-title-space" src="../assets/virtual_resume_pics/objective.gif"></b-img>
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
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col lg="4" sm="12">
                <b-img src="../assets/virtual_resume_pics/core_skills.gif"></b-img>
                <hr />
                <list-item icon="people-fill" listtext="Leadership & Mentorship" />
                <list-item icon="chat-left-dots-fill" listtext="Communication" />
                <list-item icon="suit-heart-fill" listtext="Team Work & Building Community" />
                <list-item icon="easel-fill" listtext="Creative Thnking" />
                <list-item icon="eyeglasses" listtext="Detail-oriented" />
                <list-item icon="pencil-fill" listtext="Continuous Learning" />

                <b-img class="title-space" src="../assets/virtual_resume_pics/tech_skills.gif"></b-img>
                <hr />
                <list-item icon="gear-fill" listtext="Test Driven Development (Kotlin, Groovy, Spock, Python, JavaScript)" />
                <list-item icon="cloud-fill" listtext="REST API's" />
                <list-item icon="bar-chart-fill" listtext="Observibility, Metrics, & Alerting" />
                <list-item icon="server" listtext="Application Scaling (Kubernetes)" />
                <list-item icon="github" listtext="Version Control (Git)" />
                <list-item icon="github" listtext="Continuous Integration and Development" />
                <list-item icon="shield-lock-fill" listtext="Security Compliance Experience (PCI & PII)" />
                <list-item icon="tools" listtext="DevOps Practices" />
                <list-item icon="display" listtext="Dynamic Web Page Design" />
                <list-item icon="bug-fill" listtext="Debugging" />
                <list-item icon="display" listtext="Experience with Front End Lauguages & Frameworks (HTML, CSS, JavaScript, TypeScript, JSX, React, Vue)" />
                <list-item icon="back" listtext="Experience with Backend Lauguages & frameworks (Kotlin, Grovy, Ratpack, Spring Boot, NodeJS, Micronaut)" />
                <list-item icon="clipboard-data" listtext="Experience with Databases (SQL, Radius)" />
                <list-item icon="diagram3-fill" listtext="Experience with Content Delivery Networks (Fastly)" />
                <list-item icon="people-fill" listtext="Agile Software Development (Sprints, Product Ownership, etc.)" />

                <b-img class="title-space" src="../assets/virtual_resume_pics/projects.gif"></b-img>
                <hr />
                <p>Checkout all my projects <router-link class="link-format" to="/techvideogallery">here</router-link>.</p>

                <b-img class="title-space" src="../assets/virtual_resume_pics/courses.gif"></b-img>
                <hr />
                <course-list coursetitle="Software Engineering 101: Use Software Engineering to Plan and Build Amazing" courselink="https://www.udemy.com/share/101BHy3@u2ztB1846i3rvyVmVAtN2uR8LLgwMkXwlbc44-X3mqmjMzvK6qVbK-VhZFDrirR9/"></course-list>
                <course-list coursetitle="Computer Science 101: Learn Computer Science to become a better Programmer and Software Engineer." courselink="https://www.udemy.com/share/101Y3O3@MUKyc_DZAixiNkDGiVRxAAjoOG54T5tHEYi1BYp8AMZsw9Zo_YOi02QxZGN8t71q/"></course-list>

            </b-col>
            <b-col lg="8" sm="12">
                <b-img src="../assets/virtual_resume_pics/experience.gif"></b-img>
                <hr />
                <experience-title icon="briefcase-fill" title="Target | Engineer | Brooklyn Park, MN" />
                <experience-info time="Jan 2022 - Present" summary="Active Software Engineer on the Digital Checkout team. Working on high level Cart, Checkout, and Payment functionality and features that drive a better guest experience and business growth across Targets digital platform." icon1="cloud-fill" listitem1="REST API's" icon2="gear-fill" listitem2="Backend Functionality and Testing" icon3="bar-chart-fill" listitem3="Operational On-call Support" icon4="basket2-fill" listitem4="Cart, Checkout, and Payments Processes" />
                <experience-title icon="briefcase-fill" title="Target | Emerging Engineer | Minneapolis, MN" />
                <experience-info time="Jan 2021 - Jan 2022" summary="Targets Emerging Engineer program takes individuals from unconventional tech education backgrounds and mentors them into a software engineer position through a variety of trainings, mentorships, and opportunities to work on features." icon1="pencil-fill" listitem1="Backend Development Growth and learning" icon2="display" listitem2="Computer Science Fundamentals" icon3="github" listitem3="Software Engineering Fundamentals" icon4="basket2-fill" listitem4="Start Feature and On-call Support" />
                <experience-title icon="briefcase-fill" title="Target | Store Planner | Minneapolis, MN" />
                <experience-info time="Mar 2019 - Jan 2021" summary="Worked with a team of designers in multiple areas of Target such as grocery, Starbucks, snack bar, pets, and beauty. Projects would range from full remodels, new space layouts, to replacement of fixtures. This position required a lot of cross cutting collaboration and communication skills using many mediums such as plans, elevations, renderings, and presentations." icon1="grid1x2-fill" listitem1="Space Planning" icon2="easel-fill" listitem2="Design Solutions" icon3="mouse2" listitem3="2D and 3D Modeling" icon4="bullseye" listitem4="Target Starbucks and Snack Bar Designs" />
                <experience-title icon="briefcase-fill" title=" Cliq Studios | Designer | Edina, MN" />
                <experience-info time="Jan 2018 - Mar 2019" summary="Worked independently with clients for Kitchen Design and cabinet needs. Though most projects were for large kitchens there was also opportunities for whole home designs including bathrooms, laundry rooms, pantries, and bars." icon1="grid1x2-fill" listitem1="Space Planning" icon2="easel-fill" listitem2="Design Solutions" icon3="briefcase-fill" listitem3="Customer Service Experience" icon4="basket2-fill" listitem4="Drive Sales" />
                <experience-title icon="briefcase-fill" title="Luther Volkswagen | Receptionist | St. Louis Park, MN" />
                <experience-info time="Dec 2018 - Present" summary="I personally love VW’s and have been hooked since my first red Jetta. I wanted to strengthen my guest communication and have fun so this seemed like a wonderful opportunity." icon1="people-fill" listitem1="Customer Service" icon2="mic-fill" listitem2="Communication" />
                <experience-title icon="briefcase-fill" title="Chipotle | Manager | Multiple Locations, MN" />
                <experience-title icon="briefcase-fill" title="Noodles and Company | Manager | Multiple Locations, MN" />
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col cols="4">

            </b-col>
            <b-col cols="8">
                <b-img src="../assets/virtual_resume_pics/education.gif"></b-img>
                <hr />
                <experience-title icon="pencil-fill" title="Full Stack Development Certification | Hackbright Academy | San Francisco, CA" />
                <experience-info time="2021" summary="This bootcamp was offered to me via Scholarship through Targets Early Tech Talent program. It was a chance to learn full stack development and then apply those skills/interview for Targets Emerging Engineer Program. " icon1="briefcase-fill" listitem1="Full Stack Development" icon2="briefcase-fill" listitem2="Computer Science Fundamentals" icon3="briefcase-fill" listitem3="Software Engineering Fundamentals" icon4="briefcase-fill" listitem4="Tech Interview Prep" />
                <experience-title icon="pencil-fill" title="Full Stack Development Certification | University of Minnesota (trimble) | Minneapolis, MN" />
                <experience-info time="2020" summary="Though I love design it just did not feel challenging and rewarding as a career, so I wanted to make a switch. I found that I love coding, so I decided to jump in and take a full stack development bootcamp. This bootcamp mostly focused on the MERN stack. " icon1="briefcase-fill" listitem1="Full Stack Development" icon2="briefcase-fill" listitem2="JavaScript Focused" icon3="briefcase-fill" listitem3="Focus on Team Collaboration" icon4="briefcase-fill" listitem4="Agile Fundamentals" />
                <experience-title icon="pencil-fill" title="Bacholres of Design in Architecture | University of Minnesota | Minneapolis, MN" />
                <experience-info time="2018" summary="Since I was a small child, I loved architecture and design. The way a space can make someone feel became a passion of mine and I often dreamed of working for a custom builder where bookcase trap doors and spiral staircases were possible.  I decided to go to school for architecture directly out of high school." icon1="briefcase-fill" listitem1="Architecture" icon2="briefcase-fill" listitem2="Design Concepts" icon3="briefcase-fill" listitem3="Hand Drafting" icon4="briefcase-fill" listitem4="3D Modeling Software" />
                <experience-title icon="pencil-fill" title="Associates | Anoka Ramsey Community College | Coon Rapids, MN" />
                <experience-info time="2015" summary="This was completed during my Junior and Senior year of highschool." icon1="briefcase-fill" listitem1="Post Secondary Education" icon2="briefcase-fill" listitem2="General Education" />
            </b-col>
        </b-row>
    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ListItem from '@/components/universal-components/ListItem.vue';
import ExperienceTitle from '@/components/universal-components/ExperienceTitle.vue';
import ExperienceInfo from '@/components/universal-components/ExperienceInfo.vue';
import Footer from '@/components/Footer';
import CourseList from './resume-components/CourseList.vue';

export default {
    name: "VirtualResume",
    components: {
        NavBar,
        ListItem,
        ExperienceTitle,
        Footer,
        ExperienceInfo,
        CourseList
    },
};
</script>
