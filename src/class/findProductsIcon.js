import icon from './iconProduct.js';
export default class FindIcon{

   
   static find(name){
     
      let find = icon.icon.filter( x =>{
         if(x.name.includes(name)) return true;
      });
      if(find.length > 0) return find[0]
        return {
            color : 'info',
            img : 'store'
        }
   }



}