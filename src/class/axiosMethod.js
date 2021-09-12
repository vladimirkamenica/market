import axios from 'axios';
import convertTableToObject from './htmlTableToObj.js';

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
static postNotAuth(url,data){
         
    return new Promise((res,rej)=>{
        axios.post(this.default_url(url),data)
        .then(result => {
           res(result);
       }).catch(error=>{
           rej(error);
       });  

    })   
    
}
static put(url,data){
         
    return new Promise((res,rej)=>{
        axios.put(this.default_url(url),data,this.config())
        .then(result => {
           res(result);
       }).catch(error=>{
           rej(error);
       });  

    })   
    
}
static delete(url){
         
    return new Promise((res,rej)=>{
        axios.post(this.default_url(url),this.config())
        .then(result => {
           res(result);
       }).catch(error=>{
           rej(error);
       });  

    })   
    
}
static getTableStips(category,year,week,type){
    return new Promise((res,rej)=>{
            axios.get('https://www.stips.minpolj.gov.rs/stips/ajax/nacionalni?kategorija='+category+'&godina='+year+'&nedelja='+week+'&format=html&izvor='+type+'')
                 .then(result=>{
                    if(result.data.html != '') res(convertTableToObject.convert(result.data.html))
                 })
                 .catch(err=>{
                     rej(err)
                 })
    })
}
static getTableStipsByProducts(category,year,week,type,product){
    return new Promise((res,rej)=>{
            axios.get('https://www.stips.minpolj.gov.rs/stips/ajax/nacionalni?kategorija='+category+'&godina='+year+'&nedelja='+week+'&format=html&izvor='+type+'')
                 .then(result=>{
                    if(result.data.html != ''){
                        let items = convertTableToObject.convert(result.data.html);
                        res(items.filter(x=>{
                            if(x.Proizvod == product) return true;
                        }))
                    } 
                 })
                 .catch(err=>{
                     rej(err)
                 })
    })
}
static getWeeksStips(year){
    return new Promise((res,rej)=>{
        axios.get('https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/'+year+'')
             .then(result=>{
                 res(result.data.result.nedelje)
             })
             .catch(err=>{
                 rej(err)
             })
})
}
static getSessionId(url){
    return new Promise((res,rej)=>{
        axios.get(this.default_url(url))
             .then(result=>{
                 res(result.data.id)
             })
             .catch(err=>{
                 rej(err)
             })
})
}
}