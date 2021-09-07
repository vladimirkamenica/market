<template>
  <b-navbar-brand href="#">
       <!-- Logo icon -->
        <b class="logo-icon mt-2">
            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
            <!-- Light Logo icon -->
               <b-link :to="{name: 'Home'}"><img src="../../../assets/images/pijaceLogo.png" alt="homepage" height="50" ></b-link>
            
            
        </b>
        <!--End Logo icon -->
        <!-- Logo text -->
       
  </b-navbar-brand>
</template>

<script>
export default {
    name: 'LogoDark',
}
</script>
