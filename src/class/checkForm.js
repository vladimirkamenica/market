export default class CheckForm{
    static validEmail(email){
     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
    }
     static check(errors,user){
        // errors = [];
         if (!user.name) {
     errors.name_error = "Name required.";
   }
   if (!user.email) {
     errors.email_error = 'Email required.';
   } else if (!this.validEmail(user.email)) {
     errors.email_error = 'Valid email required.';
   }
   if(!user.role_id){
     errors.role_error = 'Role required.';
   }
   if(user.password.trim() == "" && user.password_confirmation.trim() == ""){
     errors.password_error = 'Password required.';
   }else if (user.password.trim() != "" && user.password.length < 8){
     errors.password_error = 'Minimum length 8 characters.';
 
   }
   if(user.password != user.password_confirmation){
     errors.password_confirm_error = 'Password confirm error.';
       
   }
   if ( Object.keys(errors).length === 0 ) {
     return true;
   }
   else{
    return false;
   }
     }
     static checkPassword(errors,user){
  
   
   if (!user.email) {
     errors.email_error = 'Email required.';
   } else if (!this.validEmail(user.email)) {
     errors.email_error = 'Valid email required.';
   }
   
   if(user.password && user.password_confirmation && user.password.trim() == "" && user.password_confirmation.trim() == ""){
     errors.password_error = 'Password required.';
   }else if (user.password.trim() != "" && user.password.length < 8){
     errors.password_error = 'Minimum length 8 characters.';
 
   }
   if(user.password != user.password_confirmation){
     errors.password_confirm_error = 'Password confirm error.';  
   }
   else{
     errors = {};
   }
   if (Object.keys(errors).length === 0 ) {
     return true;
   }
   else{
    return false;
   }
     }
 }