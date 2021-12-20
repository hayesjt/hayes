<template>
  <div id="mainpage">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/about-gif.gif"></b-img>
        <hr />
      </div>

      <b-row>
        <b-col cols="4">
          <b-img src="../assets/headshot_bw.png" fluid></b-img>
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/who-gif.gif"></b-img>
          <hr />
          <p>
            Hello There! Welcome to my page. My name is Haylee Thomas-Kuhlmann [
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
          <p>
            I decided to design this digital space to showcase a few things:
          </p>
          <p>
            1. Many new developers reach out to me intrested in making a career
            shift with a bootcamp certificate or attending the programs I did.
            During that time we usually become connected - where I share my
            journey, some tips, some concepts, and sometimes become a mentor. I
            wanted content that could reach more people and to support those
            going through the same journy I did.
          </p>
          <p>
            2. To showcase my skills, personality, and dedication to the support
            of new developers.
          </p>
          <p>
            3. To have fun, express myself, and learn something new [ Vue.js ].
          </p>
        </b-col>
        <b-col cols="4">
          <b-img
            src="../assets/headshot_2_bw.png"
            fluid
            alt="Fluid image"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "MainPage",
  components: {
    NavBar,
    Footer
  }
}

    </script>