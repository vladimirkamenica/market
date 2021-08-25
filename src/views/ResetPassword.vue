<template>
  <div id="reset">
      <b-container>
          <b-row class="justify-content-center">
             <b-col cols="6">
                 <b-form-group label="Enter your email" label-for="email">
                     <b-form-input type="email" id="email" v-model="user.email"  class="bg-white"></b-form-input>
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
              <b-col cols="6">
                 <b-form-group label="Enter your comfirm password" label-for="confirm-password">
                     <b-form-input type="password" id="confirm-password" v-model="user.password_confirmation" class="bg-white"></b-form-input>
                 </b-form-group>
              </b-col>
          </b-row>
          <b-row class="justify-content-center mt-2">
              <b-col cols="6" class="text-center">
                <b-button class="btn" @click="reset">Reset</b-button>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import CheckForm from "../class/checkForm.js";

export default {    
name: 'ResetPAssword',
data(){
    return{
         user:{
            email: '',
            password : '',
            password_confirmation: '',
            token : ''
        },
        errors : {}
    }
},
created(){
this.user.token =  this.$route.params.token;
},
methods:{
    reset(){
       this.errors = {};
       console.log(1);
      // console.log(CheckForm.checkPassword(this.errors,this.user))
       if(CheckForm.checkPassword(this.errors,this.user)){
          this.$axios.postNotAuth("new-password",this.user)
                      .then(res => {
                          console.log(res.data)
                          if(res.data.success){
                              this.$router.push({ name: 'Login' })
                          }
                      }).catch(error =>{
                          console.log(error);
                      });
            }
       }
}
}
</script>

<style>

</style>