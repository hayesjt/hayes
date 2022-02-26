<template>
<div id="mainpage">
    <nav-bar></nav-bar>

    <b-container class="content-container">
        <div class="title-block">
            <b-img src="../assets/about-gif.gif"></b-img>
            <hr />
        </div>

        <b-row class="title-space">
            <b-col cols="4">
                <b-img src="../assets/headshot_bw.png" fluid></b-img>
            </b-col>
            <b-col cols="8">
                <b-img src="../assets/who-gif.gif"></b-img>
                <hr />
                <p>
                    Hello There! Welcome to my personal site. My name is Haylee Thomas-Kuhlmann [
                    they/them/theirs ].
                </p>
                <p>
                    I am curerntly a Software Engineer on the Digital Checkout Team at
                    Target, helping support and design features for the backend portion
                    of the cart you use on the web and mobile apps.
                </p>
                <p>
                    I gained my experence in coding through two full stack development
                    bootcamps [ UMN, Hackbright Academy ] and through Target's Emerging
                    Engineer Program.
                </p>
                <p>
                    Prior to learning how to code I completed my Bachlores of Design in
                    Arhitecture at the university of Minnesote [ UMN ] and worked as a
                    designer for three years.
                </p>
                <p>
                    During those three years I realized I was more intrested in digital
                    design and started looking at building UI's. Shortly after, I just
                    knew I had to switch careers.
                </p>
                <p>I have not looked back since.</p>
            </b-col>
        </b-row>

        <b-row class="title-space">
            <b-col cols="8">
                <b-img src="../assets/why-gif.gif"></b-img>
                <hr />
                <p>I designed this digital space in hopes of:</p>
                <list-item icon="people-fill" listtext="Connecting with new and seasoned developers" />
                <list-item icon="share-fill" listtext="Sharing resources" />
                <list-item icon="briefcase-fill" listtext="Showcasing my skills, personality, and dedication to the support of
                    new developers" />
                <list-item icon="joystick" listtext="To have fun, express myself, and learn something new" />
            </b-col>
            <b-col cols="4">
                <b-img src="../assets/headshot_2_bw.png" fluid alt="Fluid image"></b-img>
            </b-col>
        </b-row>
    </b-container>

    <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ListItem from '@/components/universal-components/ListItem';

export default {
    name: "MainPage",
    components: {
        NavBar,
        Footer,
        ListItem
    },
};
</script>
