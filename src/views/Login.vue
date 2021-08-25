<template>
  <div id="login">
      <b-container>
          <b-row class="justify-content-center">
              <b-col cols="6">
                 <b-form-group label="Enter your email" label-for="email">
                     <b-form-input type="email" id="email" v-model="user.email" class="bg-white"></b-form-input>
                 </b-form-group>
              </b-col>
          </b-row>
          <b-row class="justify-content-center">
              <b-col cols="6">
                 <b-form-group label="Enter your password" label-for="password">
                     <b-form-input type="password" id="password" v-model="user.password" class="bg-white"></b-form-input>
                 </b-form-group>
              </b-col>
          </b-row>
            <b-row class="justify-content-center">
              <b-col cols="6" class="text-center">
              <b-link :to="{name: 'Forgot'}">Forgot password</b-link>
              </b-col>
          </b-row>
          <b-row class="justify-content-center mt-2">
              <b-col cols="6" class="text-center">
                <b-button class="btn" @click="loginAxios">Login</b-button>
              </b-col>
          </b-row>
      </b-container>
      
  </div>
</template>

<script>

export default {
name: 'Login',
data(){
    return{
        user : {
            email : "",
            password : "",
        }
    }
},
methods: {
     loginAxios(){
        
         this.$axios.post("login",this.user)
                    .then( res=>{
                         if(res.data.success){
                    localStorage.setItem( 'token', res.data.token );
                    this.$store.commit("setAuth", true);
                    this.$store.commit("setAuthUser", res.data.user);
                    this.$router.push({ name: 'Home' })
                    console.log(this.$store);
                    console.log(localStorage.getItem('token'));
                    console.log(res.data.auth);

                   }else{
                       localStorage.removeItem('token');
                       console.log('error');
                   }
                    } )
                    .catch(err =>{
                        console.log(err);
                    });

      }
}
}
</script>

<style>

</style>