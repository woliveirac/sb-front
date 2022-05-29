// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import ToggleButton from "vue-js-toggle-button";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ToggleButton);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
