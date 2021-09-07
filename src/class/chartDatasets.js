import axios from '@/class/axiosMethod.js';

import sortArray from 'sort-array';
import store from "../store/Store";
import sortObjectsArray from 'sort-objects-array';
export default class Datasets{

 static getItemsBySortWeekends(cat,sor,datasets,find_week,year,current_month,data_filter,header){

    let find_week_Sort = find_week.sort();     
    for(let p = 0; p < datasets.length; p++){
          for (let i = 0; i < find_week_Sort.length; i++) {
           this.getDataOfTable(cat,sor,year,find_week_Sort[i],datasets[p].label,datasets,current_month,data_filter,header);
         }
    }             

}
static getDataOfTable(cat,sor,year,week,product,datasets,current_month,data_filter,header){

    axios.getTableStips(cat,year,week,sor)
    .then(res =>{                 
        this.priceByProducts(res,product,week,data_filter,header);  
        
        for (let i = 0; i < datasets.length; i++) {
           let sort = sortObjectsArray(data_filter.filter(x=>{
              if(x.product == datasets[i].label) return true;
              }),'month');
              datasets[i].data = this.obj_to_array(sort);                                                             
        }
        
        if(datasets[0].data.length == current_month && datasets[1].data.length == current_month && datasets[2].data.length == current_month && datasets[3].data.length == current_month && datasets[4].data.length == current_month){
         datasets.forEach(data=>{
         data.label = data.label.split(' ')[0];    
         })
         store.commit("setDisplay", true);
       
      }                      
})
}
static priceByProducts(res,product,week,data_filter,header){
    let items = res.filter(x=>{
        if(x.Proizvod == product) return true;
      });                               
           let month = {};
           month.month = week;
           month.value = this.dataRow(items,header);                                
           month.product = product;
           data_filter.push(month);
}
static dataRow(data,header){
    let arr = []; 
    for (let i = 0; i < data.length; i++) {       
        for (let h = 0; h < header.length; h++) {
            let price =  data[i][header[h]];
            if(price != '')arr.push(price);
             arr.push(0)                 
        }          
      }
      let arrsort = sortArray(arr,{ order: 'desc' });     
      return arrsort[0];      
}
static obj_to_array(myData){
    let my_liste = []
    for (var i = 0; i < myData.length; i++) {
            let el = myData[i].value                       
            my_liste.push(el)
    }                                   
    return my_liste
}
}