<template>
  <nav id="navigation" @scroll="colorScroll" ref="myScroll" class="navbar">
    <router-link class="navbar-brand" to="/">
      <h1 class="title-navbar">Sund i Lund</h1>
    </router-link>
    <!-- Hamburger-->
    <div class="navbar-header">
      <div
        class="hamburger"
        :class="toggle ? 'open' : ''"
        ref="animateHamburger"
        @click="navbarToggles"
      >
        <span class="strips"></span>
      </div>
      <div ref="myOverlay" class="overlay">
        <!-- Overlay content -->
        <ul class="overlay-content">
          <li>
            <span @click="linksInOverlay('/hem')" class="overlayLink">Hem</span>
          </li>
          <li>
            <span @click="linksInOverlay('/blogg')" class="overlayLink">Blogg</span>
          </li>
          <li>
            <span @click="linksInOverlay('/galleri')" class="overlayLink">Galleri</span>
          </li>
          <li>
            <span @click="linksInOverlay('/hitta-hit')" class="overlayLink">Information / Hitta hit</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      toggle: false,
      hamburger: false,
      scrolled: false
    };
  },
  created() {
    window.addEventListener("scroll", this.colorScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.colorScroll);
  },
  methods: {
    linksInOverlay(link) {
      this.$router.push(link);
      this.navbarToggles();
    },
    // Navbar transparent / colored
    colorScroll() {
      console.log("aslködjfösdkafjskdlafj");
      this.scrolled = window.scrollY > 0;
      if (this.scrolled) {
        const colorMe = this.$refs.myScroll;
        colorMe.style.background = "rgb(62, 187, 181)";
        colorMe.style.transition = "all 2s";
      } else if (!this.scrolled) {
        const colorMe = this.$refs.myScroll;
        colorMe.style.background = "rgba(34, 244, 32, 0.0)";
        colorMe.style.transition = "all 1s";
      }
    },

    navbarToggles() {
      this.toggle = !this.toggle;
      this.hamburger = !this.hamburger;

      if (this.toggle && this.hamburger) {
        const hamburgerArrow = this.$refs.animateHamburger;
        hamburgerArrow.classList.add("open");
        const toggle = this.$refs.myOverlay;
        toggle.style.left = "0vw";
      } else if (!this.toggle && !this.hamburger) {
        const hamburgerStrips = this.$refs.animateHamburger;
        hamburgerStrips.classList.remove("open");
        const closeNav = this.$refs.myOverlay;
        closeNav.style.left = "-100vw";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#navigation {
  z-index: 10000;
  position: fixed;
  width: 100%;
}
.title-navbar {
  font-weight: 600;
  font-size: 40px;
  position: relative;
  margin: 0;
  @media (min-width: 320px) and (max-width: 767.98px) {
    font-size: 25px;
  }
}
/****** Hamburger ******/
.hamburger {
  height: 35px;
  width: 35px;
  background-color: transparent;
  border-radius: 3px;
  position: relative;
  z-index: 10000 !important;
  cursor: pointer;
  @media (max-width: 375px) {
    padding: 0 !important;
  }
}
span.strips {
  background-color: var(--text);
  height: 4px;
  width: 24px;
  border-radius: 2px;
  position: absolute;
  top: 45%;
  left: 15%;
  transition: all 0.7s ease;
}
div.hamburger.open span.strips {
  -webkit-transform: rotate(360deg);
  -ms-transfrom: rotate(360deg);
  transform: rotate(360deg);
}
span.strips::before {
  content: "";
  background-color: var(--text);
  height: 4px;
  width: 24px;
  border-radius: 2px;
  position: absolute;
  bottom: 200%;
  width: 100%;
  left: 0;
  transition: all 0.7s ease;
}
div.hamburger.open span.strips::before {
  bottom: 4px;
  left: -2px;
  width: 16px;
  -webkit-transform: rotate-(45deg);
  -ms-transfrom: rotate(-45deg);
  transform: rotate(-45deg);
}
span.strips::after {
  content: "";
  background-color: var(--text);
  height: 4px;
  width: 24px;
  border-radius: 2px;
  position: absolute;
  top: 200%;
  width: 100%;
  left: 0;
  transition: all 0.7s ease;
}
div.hamburger.open span.strips::after {
  top: 4px;
  left: -2px;
  width: 16px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/****** Overlay ******/
.overlay {
  height: 100vh;
  width: 100%;
  position: absolute; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: -130vw;
  top: 0;
  bottom: 0;
  background-color: #000000; /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.85); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s left; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}
/* The navigation links inside the overlay */
.overlay > ul > li > .overlayLink {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
  &:hover {
    -webkit-animation: pulse 2s;
    animation: pulse 2s;
    cursor: pointer !important;
  }
}
/* When you mouse over the navigation links, change their color */
.overlay > ul > li > .overlayLink:hover,
.overlay > ul > li > .overlayLink:focus {
  color: #f1f1f1;
}
/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay > ul > li > .overlayLink {
    font-size: 20px;
  }
}
</style>
