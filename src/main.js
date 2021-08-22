import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import store from "./store/Store";
import router from "./router/Router";
import "./assets/scss/style.scss";
import axios from "axios";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPen,faTimes,faTint,faWind} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faPen,faTimes,faTint,faWind)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({ store,
     router, 
     render: (h) => h(App)
     }).$mount("#app");

     

     