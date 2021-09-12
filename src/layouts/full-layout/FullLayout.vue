<template>
  <div :class="`${LayoutType} ${Theme}`">
    <!-- ---------------------------------- -->
    <!--- Vertical Header part -->
    <!-- ---------------------------------- -->
    <VerticalSidebar />
    <aside class="page-wrapper">
      <VerticalHeader />
      <div class="min-height container-fluid p-4">

<router-view></router-view>

    
 
      </div>
      <Footer />
    </aside>
  </div>
</template>

<script>
import VerticalHeader from "./vertical-header/VerticalHeader";
import VerticalSidebar from "./vertical-sidebar/VerticalSidebar";
import Footer from "./footer/Footer";
import AxiosMethod from '@/class/axiosMethod.js';
import { mapState } from "vuex";
export default {
  name: "FullLayout",
  components: {
    VerticalHeader,
    VerticalSidebar,
    Footer,
  },
  
  data: () => ({}),
  computed: {
    ...mapState(["LayoutType", "Theme"]),
  },
    async created(){
     this.getAuthCheck();
    },
    methods:{
 getAuthCheck(){
             this.$http.get(AxiosMethod.default_url('me'),AxiosMethod.config())
                     .then(res => {
                        console.log(res.data);
                        this.$store.commit("setAuth", true);
                        this.$store.commit("setAuthUser", res.data.user);
                     }).catch(e=>{
                       console.log(e);
                       this.$store.commit("setAuth", false);
                        this.$store.commit("setAuthUser", []);
                     });
    },
    },
  watch: {},
};
</script>

<style>
</style>