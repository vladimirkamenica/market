import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import store from "./store/Store";
import router from "./router/Router";
import "./assets/scss/style.scss";
import my_axios from '@/class/axiosMethod.js';
import axios from "axios";
import App from "./App.vue";

import StipsSite from './components/StipsSite/StipsSite.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, 
     faPen,
     faTimes,
     faTint,
     faWind,
     faAppleAlt,
     faEgg,
     faPause,
     faPlay,
     faChevronRight,
     faChevronLeft,
     faPaw,faHome,
     faStore, 
     faCalendar,
    } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VCalendar from 'v-calendar';
import VueSession from 'vue-session';


library.add(faUserSecret,
     faPen,
     faTimes,
     faTint,
     faWind,
     faAppleAlt,
     faEgg,
     faPause,
     faPlay,
     faChevronRight,
     faChevronLeft
     ,faPaw,
     faHome,
     faStore,
     faCalendar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('stips-site', StipsSite)
Vue.use(VCalendar, {
     componentPrefix: 'vc',  
    
   });
Vue.use(VueSession)
Vue.prototype.$axios = my_axios;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({ store,
     router, 
     render: (h) => h(App)
     }).$mount("#app");

     

     