<template>
<div id="mainpage">
    <nav-bar></nav-bar>

    <b-container class="content-container">
        <b-img src="../assets/headers/welcome_header.png" fluid-grow></b-img>

        <div class="border-needed">
            <b-row>
                <b-col lg="1">
                </b-col>
                <b-col lg="5">
                    <b-img class="bottom-space-needed" src="../assets/headshots/standing_headshot.png" fluid center></b-img>
                </b-col>

                <b-col lg="5" class="text-center center">

                    <h3>Hi there! Thanks for stopping in.</h3>
                    <p>
                        My name is Haylee Thomas-Kuhlmann and I currently work as a Software
                        Engineer for Target’s digital cart and checkout experience.
                    </p>
                    <p>
                        I’ve created this space to connect with like-minded people, share my
                        virtual resume, and provide samples of both my developer and
                        volunteer work.
                    </p>
                </b-col>
                <b-col lg="1">
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="1">
                </b-col>
                <b-col lg="5" class="text-center center">
                    <h3>How did I get here?</h3>
                    <p>
                        I gained my software engineering and computer science knowledge
                        through two full stack bootcamps and Target’s Emerging Engineer
                        program. Though I have learned a lot I continue to add to my skill
                        set through various portals such as Udemy courses, Pluralsight,
                        Literature, and diving into projects during my free time.
                    </p>
                    <p>
                        Before jumping into a coding career, I was an architectural
                        designer. I received a bachelor’s degree in architectural design
                        from the University of Minnesota. Though I enjoyed my various design
                        jobs it did not feel mentally stimulating – I was seeking something
                        with more problem solving, challenge, and nerdy creativity.
                    </p>
                </b-col>
                <b-col lg="5">
                    <b-img class="bottom-space-needed" src="../assets/headshots/close_headshot.png" fluid center></b-img>
                </b-col>
                <b-col lg="1">
                </b-col>
            </b-row>
        </div>

        <div class="border-needed large-title-space">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h3>INTERESTS</h3>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12" class="text-center">
                    <p>Outside of work I try and stay busy by vounteering and fullfilling my other passions.</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/plants.png" fluid center></b-img>
                    <h5>House Plants</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/animals.png" fluid center></b-img>
                    <h5>Animal Welfare</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/green_hand.png" fluid center></b-img>
                    <h5>Sustainability</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/books.png" fluid center></b-img>
                    <h5>Literature</h5>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/coffee.png" fluid center></b-img>
                    <h5>Coffee Lover</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/vw.png" fluid center></b-img>
                    <h5>Volkswagen</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/food.png" fluid center></b-img>
                    <h5>Foodie</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/hobbies/paper_plane.png" fluid center></b-img>
                    <h5>Travel</h5>
                </b-col>
            </b-row>
        </div>

        <div class="border-needed large-title-space">
            <b-row>
                <b-col lg="12" class="text-center">
                    <h3>CURRENT BOOKS</h3>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12" class="text-center">
                    <p>I currently use an app called GoodReads to track my books - <a href="https://www.goodreads.com/user/show/146290379-haylee-thomas-kuhlmann">lets connect</a> if your intrested.</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/books/quiet.png" fluid center></b-img>
                    <h5>Quiet: The Power of Introverts in a World That Can't Stop Talking</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/books/what_happened_to_you.png" fluid center></b-img>
                    <h5>What Happened to You? Conversations on Trauma, Resilience, and Healing</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/books/gender_and_our_brains.png" fluid center></b-img>
                    <h5>Gender and Our Brains: How New Neuroscience Explodes the Myths of the Male and Female Minds</h5>
                </b-col>
                <b-col lg="3" class="text-center">
                    <b-img class="bottom-space-needed" src="../assets/books/atomic_habits.png" fluid center></b-img>
                    <h5>Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones</h5>
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
import ContactSection from './universal-components/ContactSection.vue';

export default {
    name: "MainPage",
    components: {
        NavBar,
        Footer,
        ContactSection,
    },
};
</script>
