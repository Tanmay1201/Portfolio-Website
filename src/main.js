// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";


import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

// /svgs/brands/linkedin
// import  { faFacebook }  from "@fortawesome/fontawesome-free";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faLinkedin);

// Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
