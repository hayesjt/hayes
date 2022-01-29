<template>
  <div id="volunteer">
    <nav-bar></nav-bar>

    <b-container class="content-container">
      <div class="title-block">
        <b-img src="../assets/volunteer-gif.gif"></b-img>
        <hr />
      </div>

      <b-row>
        <b-col cols="4">
          <b-img src="../assets/leo_and_me.png" fluid></b-img>
        </b-col>
        <b-col cols="8">
          <b-img src="../assets/mars-gif.gif"></b-img>
          <hr />
          <p>
            <b-icon class="nav-icon" icon="github"></b-icon>
            Foster Parent
          </p>
          <p>
            <b-icon class="nav-icon" icon="truck"></b-icon>
            Intake Volunteer
          </p>
          <p>
            <b-icon class="nav-icon" icon="suit-heart-fill"></b-icon>
            Giving Love
          </p>
          <p>
            MARS is the first rescure I have volunteered for and the place I got
            my first pup Leo!
          </p>
          <p>
            I love fostering animals until their furever home adopts them and
            helping on animal intake day. This is typically a full day event
            that takes animals from less fortunate places and transports them
            the MARS. Each volunteer takes in a pup or litter of pups to help
            get them the vet care they need, a warm bath, and their photos for
            the website.
          </p>
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="8">
          <b-img src="../assets/rsr-gif.gif"></b-img>
          <hr />
          <p>
            <b-icon class="nav-icon" icon="easel-fill"></b-icon>
            Graphic Designer
          </p>
          <p>
            <b-icon class="nav-icon" icon="instagram"></b-icon>
            Social Media Specilist
          </p>
          <p>
            <b-icon class="nav-icon" icon="display"></b-icon>
            Software Engineer
          </p>
          <p>
            <b-icon class="nav-icon" icon="suit-heart-fill"></b-icon>
            Giving Love
          </p>
          <p>
            I got really intrested in Ruff Start Rescue when I saw they were
            hiring volunteers to do business like tasks so I signed up for as
            much as I could immeditely!
          </p>
          <p>
            My volunteer schedule is pretty crazy - I help everyday with the
            organizations social media and also take on design/development
            projects as needed. These projects have ranged from designing pride
            t-shirts, creating event posters, and taking a look at some old code
            in PHP to understand if we could re-do a feature. I dropped some
            samples of my volunteer work below, thanks for checking it out!
          </p>
        </b-col>
        <b-col cols="4">
          <b-img
            src="../assets/mars_and_me.png"
            fluid
            alt="Fluid image"
          ></b-img>
        </b-col>
      </b-row>

      <b-row class="title-space">
        <b-col cols="12">
          <b-img src="../assets/volunteer-work-gif.gif"></b-img>
          <hr />
          <b-row class="title-space">
            <b-col cols="4">
              <b-img
                src="../assets/rsr-pride-shirt.png"
                fluid
                alt="Fluid image"
              ></b-img>
            </b-col>
            <b-col cols="4">
              <b-img
                src="../assets/sasha-fit-event.png"
                fluid
                alt="Fluid image"
              ></b-img>
            </b-col>
            <b-col cols="4">
              <b-img
                src="../assets/rsr-auction.png"
                fluid
                alt="Fluid image"
              ></b-img>
            </b-col>
          </b-row>
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
  components: {
    NavBar,
    Footer,
  },
};
</script>
