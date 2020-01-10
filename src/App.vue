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
  flex: 1;
}
#app {
  background-image: url("/img/green_cloudy.jpg");
  background-attachment: fixed;
  background-color: rgb(15, 153, 135);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  // font-family: "Comic sans ms", Helvetica, Arial, sans-serif;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
