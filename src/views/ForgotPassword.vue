<template>
  <div id="forgot">
      <b-container v-if="!message">
          <b-row class="justify-content-center">
              <b-col cols="6">
                  <h4>Forgot your password?</h4>
              </b-col>
          </b-row>
           <b-row class="justify-content-center">
              <b-col cols="6">
                  <span class="help-block">
          Email address you use to log in to your account
          <br>
          We'll send you an email with instructions to choose a new password.
        </span>
              </b-col>
          </b-row>
           <b-row class="justify-content-center mt-3">
              <b-col cols="6">
                 <b-form-group label="Enter your email" label-for="email">
                     <b-form-input type="email" id="email" v-model="user_login.email" class="bg-white"></b-form-input>
                 </b-form-group>
              </b-col>
          </b-row>
           <b-row class="justify-content-center mt-2">
              <b-col cols="6" class="text-center">
                <b-button class="btn" @click="postAxiosResetLink">Continue</b-button>
              </b-col>
          </b-row>
      </b-container>
      <b-container v-if="message">
           <b-row class="justify-content-center mt-2">
              <b-col cols="6" class="text-center">
                <h4>
                     Check your email for a password reset link
               </h4>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
name: 'ForfotPassword',
data(){
    return{
 user_login : {
            email : "",       
        },
        message : false
    }
},
methods:{
postAxiosResetLink(){
   if(this.user_login.email.trim() != ""){
     this.$http.post('http://localhost:8000/api/forgot-password',this.user_login, {
      })
                .then((res)=>{
                     console.log(res);
                     if(res.data.success) this.message  = true;
                 }).catch(error => {
                    console.log(error.response.data.errors);
                 })
       }
   }
}
}
</script>

<style>

</style>