import Vue from "vue";
import VueRouter from "vue-router";

/***** Views *****/
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import CreatePosts from "../views/CreatePosts.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hem",
    component: Home
  },
  {
    path: "/blogg",
    name: "blogg",
    component: Blog
  },
  {
    path: "/skapa-inlägg",
    name: "/skapa-inlägg",
    component: CreatePosts
  },
  {
    path: "/hitta-hit",
    name: "/hitta-hit",
    component: Contact
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
