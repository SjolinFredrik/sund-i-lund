import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

/***** Styling *****/
import vueSmoothScroll from "vue2-smooth-scroll";
import BootstrapVue from "bootstrap-vue";
import "./scss/custom.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue, vueSmoothScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
