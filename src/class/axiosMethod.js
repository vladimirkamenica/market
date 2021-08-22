import axios from 'axios';
export default class AxiosMethod{

    static default_url(url){
        return `http://localhost:8000/api/${url}`;
    }
    static config(){
        let  config = { 
            headers :  { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        return config;
    }
    static get(url){
         
        return new Promise((res,rej)=>{
            axios.get(this.default_url(url),this.config())
            .then(result => {
               res(result);
           }).catch(error=>{
               rej(error);
           });  

        })   
        
  }
  static post(url,data){
         
    return new Promise((res,rej)=>{
        axios.post(this.default_url(url),data,this.config())
        .then(result => {
           res(result);
       }).catch(error=>{
           rej(error);
       });  

    })   
    
}
}