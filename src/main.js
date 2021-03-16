/* eslint-disable */
import Vue from "vue";
import VConsole from "vconsole";
import "./assets/style/index.styl";
import App from "./App.vue";
import animated from 'animate.css'

// VConsole
if (process.env.VUE_APP_MODE === "testbuild") {
  new VConsole();
}
// Toasted
import Toasted from "vue-toasted";
Vue.use(Toasted, {
  position: "top-center",
  duration: 4000,
  className: "my-toast"
});
Vue.use(animated)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
