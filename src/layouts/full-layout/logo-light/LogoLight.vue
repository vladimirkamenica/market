<template>
  <b-navbar-brand >
       <!-- Logo icon -->
        <b class="logo-icon">
            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
            <!-- Dark Logo icon -->
            <b-link :to="{name: 'Home'}"><img src="../../../assets/images/pijaceLogoWhite.png" alt="homepage" height="50" ></b-link>
           
            
        </b>
        <!--End Logo icon -->
        <!-- Logo text -->
        
  </b-navbar-brand>
</template>

<script>
export default {
    name: 'LogoLight',
}
</script>
