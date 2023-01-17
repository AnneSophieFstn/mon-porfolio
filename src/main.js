// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Router from "./router";
import Vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router: Router,
  vuetify: Vuetify,
  components: { App },
  template: "<App/>"
});
