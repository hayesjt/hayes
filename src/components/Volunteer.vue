<template>
<div id="volunteer">
    <nav-bar></nav-bar>

    <b-container class="content-container">

        <b-img src="../assets/headers/volunteer_work_header.png" fluid-grow></b-img>

        <div class="border-needed">
            <b-row>

                <b-col lg="4">
                    <b-img class="bottom-space-needed" src="../assets/headshots/leo_headshot.png" fluid center></b-img>
                </b-col>

                <b-col lg="5" class="text-center center">

                    <h3>Midwest Animal Rescue</h3>
                    <p>
                        I started volunteering for Midwest Animal Rescue (MARS) as a foster for puppies and soon fell in love with one specific dog - Leo! I adopted him and now continue to foster other puppies when I can.
                    </p>
                    <p>
                        I also participate in their intake process when I have a free Saturday. This typically last a few hours and helps get all dog into the foster parents arms.
                    </p>
                </b-col>
                <b-col lg="3" class="text-center center">
                    <list-item icon="github" listtext="Foster Parent" />
                    <list-item icon="truck" listtext="Intake Volunteer" />
                    <list-item icon="suit-heart-fill" listtext="Giving Love" />
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="4">
                    <b-img class="bottom-space-needed" src="../assets/headshots/dogs_headshot.png" fluid center></b-img>
                </b-col>

                <b-col lg="5" class="text-center center">

                    <h3>Ruff Start Rescue</h3>
                    <p>
                        I got really intrested in Ruff Start Rescue when I saw they were hiring volunteers to do business like tasks so I signed up for as much as I could immeditely!
                    </p>
                    <p>
                        My volunteer schedule is pretty crazy - I help everyday with the organizations social media and also take on design/development projects as needed. These projects have ranged from designing pride t-shirts, creating event posters, and taking a look at some old code in PHP to understand if we could re-do a feature. I dropped some samples of my volunteer work below, thanks for checking it out!
                    </p>
                </b-col>
                <b-col lg="3" class="text-center center">
                    <list-item icon="easel-fill" listtext="Graphic Designer" />
                    <list-item icon="instagram" listtext="Social Media Specilist" />
                    <list-item icon="display" listtext="Software Engineer" />
                    <list-item icon="suit-heart-fill" listtext="Giving Love" />
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="4">
                    <b-img class="bottom-space-needed" src="../assets/headshots/target_headshot.png" fluid center></b-img>
                </b-col>

                <b-col lg="5" class="text-center center">

                    <h3>Target Pro Bono</h3>
                    <p>
                        Target asks Engineers to participate in various Pro Bono projects that relate to the teams they are currently on.I was extremely excited to take on the Pro Bono project that opened for my team and will continue to volunteer for these oppurtunities as they come along. 
                    </p>
                    <p>
                        Recently, a spa in downtown Minneapolis, Hola Ka Lani, applied to Target's Pro Bono program and got accepted. They were looking to sell e-gift cards, introduce drop shipping for products, and update their website.
                    </p>
                </b-col>
                <b-col lg="3" class="text-center center">
                    <list-item icon="easel-fill" listtext="Graphic Designer" />
                    <list-item icon="display" listtext="Software Engineer" />
                    <list-item icon="suit-heart-fill" listtext="Giving Back" />
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="4">
                    <b-img class="bottom-space-needed" src="../assets/headshots/team_headshot.png" fluid center></b-img>
                </b-col>

                <b-col lg="5" class="text-center center">

                    <h3>Mentorship & Friendship</h3>
                    <p>
                        After completing both my bootcamps I got a large amount of people reaching out to me via LinkedIn asking about my experiences with the bootcamps, getting a career after, and topics that would be good to start learning if they wanted to take this route. 
                    </p>
                    <p>
                        I have taken this oppurtunity to become a mentor, make incredible friendships, and support others with a simliar background in whatever way possible. This has been extremely rewarding for me and continues to be something I look forward to.
                    </p>
                </b-col>
                <b-col lg="3" class="text-center center">
                    <list-item icon="easel-fill" listtext="Mentor" />
                    <list-item icon="suit-heart-fill" listtext="Friend" />
                </b-col>
            </b-row>
        </div>

<contact-section></contact-section>
    </b-container>
    <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ListItem from "@/components/universal-components/ListItem"
import ContactSection from './universal-components/ContactSection.vue';

export default {
    components: {
        NavBar,
        Footer,
        ListItem,
        ContactSection,
    },
};
</script>
