<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
}
#app {
  // font-family: "Comic sans ms", Helvetica, Arial, sans-serif;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
