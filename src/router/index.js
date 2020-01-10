import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Gallery from "../views/Gallery.vue";
import Author from "../views/Author.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hem",
    component: Home
  },
  {
    path: "/galleri",
    name: "galleri",
    component: Gallery
  },
  {
    path: "/kontakt",
    name: "kontakta",
    component: About
  },
  {
    path: "/admin",
    name: "author",
    component: Author
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
