import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: false,
    LayoutType: "full-sidebar",
    SidebarColor: "white",
    navbarColor: "#5bab42",
    logoColor: "white",
    auth : false,
    display : false,
    authUser : {},
  },
  mutations: {
    SET_LAYOUT_TYPE(state, payload) {
      state.LayoutType = payload;
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    setAuth(state,auth){
      state.auth = auth;
    },
    setAuthUser(state,user){
      state.authUser = user;
    },
    setDisplay(state,display){
      state.display = display;
    },
  },
  actions: {
    setLayoutType({ commit }, width) {
      commit("SET_LAYOUT_TYPE", width);
    },
  },
  getters: {
    getAuth(state){
      return state.auth;
    },
    getDisplay(state){
      return state.display;
    },
    getAuthUser(state){
      return state.authUser;
    },
  },
});
