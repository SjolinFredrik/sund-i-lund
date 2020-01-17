<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
// Font awesome import
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
* {
  margin: 0;
  padding: 0;
}
p {
  margin: 0 !important;
}
main {
  //  Fixed footer
  flex: 1;
}
#app {
  // Image for the whole site
  background-image: url("/img/green_cloudy.jpg");
  background-attachment: fixed;
  background-color: rgb(15, 153, 135);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // Color variables
  --primary: #29a69b;
  --secondary: #7296d4;
  --tertiary: #334b48;
  --buttonColor: #ffa17a;
  --buttonColorHover: #cf8464;
  --inputColor: #96b1ad;
  --text: #f5f5f5;
  //  Headings
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", sans-serif;
    color: var(--text);
  }
  // Fixed footer
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
