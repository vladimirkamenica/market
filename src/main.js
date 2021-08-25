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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPen,faTimes,faTint,faWind} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faPen,faTimes,faTint,faWind)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$axios = my_axios;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({ store,
     router, 
     render: (h) => h(App)
     }).$mount("#app");

     

     