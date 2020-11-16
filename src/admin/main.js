import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from "./store";
import $axios from "./requests";

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation, {mode: 'manual'});

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  SimpleVueValidation,
  render: h => h(App)
});