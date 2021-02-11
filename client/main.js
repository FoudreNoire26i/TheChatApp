import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import VueRouter from 'vue-router';
import { routes } from './router.js'
import Links from '../imports/api/collections/Links';

if (Meteor.isDevelopment){
  window.Links = Links
}



Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Meteor.startup(() => {
  new Vue({
    router : router,
    el: '#app',
    ...App,
  })
})
