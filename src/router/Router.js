import Vue from "vue";
import Router from "vue-router";
import AxiosMethod from '@/class/axiosMethod.js';
import axios from "axios";
import store from "../store/Store";
//import auth from '../middleware/auth.js';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  

  routes: [
    {
      path: "/",
      redirect: "/starter",
      name: 'Home',
      component: () => import("@/layouts/full-layout/FullLayout"),
      beforeEnter : (to,from, next) => {
        axios.get(AxiosMethod.default_url('me'),AxiosMethod.config())
        .then(res => {
           console.log(res.data);
           store.commit("setAuth", true);
          store.commit("setAuthUser", res.data.user);
           next()
        }).catch(e=>{
          console.log(e);
          store.commit("setAuth", false);
           store.commit("setAuthUser", []);
           next()
        });

      },
      children: [
        {
          name: "Starter",
          path: "starter",
          component: () => import("@/views/Starter"),
        },
        {
          name: "Alert",
          path: "/ui-elements/alert",
          component: () => import("@/views/ui-elements/Alert"),
        },
        {
          name: "Avatar",
          path: "/ui-elements/avatar",
          component: () => import("@/views/ui-elements/Avatar"),
        },
        {
          name: "Badge",
          path: "/ui-elements/badge",
          component: () => import("@/views/ui-elements/Badge"),
        },
        {
          name: "Breadcrumb",
          path: "/ui-elements/breadcrumb",
          component: () => import("@/views/ui-elements/Breadcrumb"),
        },
        {
          name: "Buttons",
          path: "/ui-elements/buttons",
          component: () => import("@/views/ui-elements/Buttons"),
        },
        {
          name: "Button Group",
          path: "/ui-elements/button-group",
          component: () => import("@/views/ui-elements/ButtonGroup"),
        },

        {
          name: "Cards",
          path: "/ui-elements/cards",
          component: () => import("@/views/ui-elements/Cards"),
        },

        {
          name: "Dropdown",
          path: "/ui-elements/dropdown",
          component: () => import("@/views/ui-elements/Dropdown"),
        },
        {
          name: "Popover",
          path: "/ui-elements/popover",
          component: () => import("@/views/ui-elements/Popover"),
        },

        {
          name: "Toasts",
          path: "/ui-elements/toasts",
          component: () => import("@/views/ui-elements/Toasts"),
        },
        {
          name: "Tooltip",
          path: "/ui-elements/tooltip",
          component: () => import("@/views/ui-elements/Tooltip"),
        },
        {
          name: "Login",
          path: "/login",
          component: () => import("@/views/Login"),
        },
        {
          name: "Forgot",
          path: "/forgot",
          component: () => import("@/views/ForgotPassword"),
        },
        {
          name: "Reset",
          path: "/reset-password/:token",
          component: () => import("@/views/ResetPassword"),
        },
        {
          name: "CategorySubcategory",
          path: "/category-subcategory",
          component: () => import("@/views/CategorySubcategory"),
        },
        {
          name: "Category",
          path: "/category",
          component: () => import("@/views/Category"),
        },
        {
          name: "Subcategory",
          path: "/subcategory/:id",
          component: () => import("@/views/Subcategory"),
        },
        {
          name: "Stips",
          path: "/stips",
          component: () => import("@/views/Stips"),
        },
        {
          name: "SingleCategory",
          path: "/single-category/:category",
          component: () => import("@/views/SingleCategory"),
        },
        {
          name: "Weeks",
          path: "/weeks/:product",
          component: () => import("@/views/Weeks"),
        },
        {
          name: "Table",
          path: "/table/:product/:year/:week",
          component: () => import("@/views/Table"),
        },
        {
          name: "CurrentTable",
          path: "/current-table/:product/:category",
          component: () => import("@/views/CurrentTable"),
        },
      ],
    },
    {
      path: "*",
      component: () => import("@/views/Starter"),
    },
  ],
});

export default router;
