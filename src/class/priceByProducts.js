import rowData from './rowData.js';

export default function(data,data_filter,week,product,header){
    let items = data.filter(x=>{
    if(x.Proizvod == product) return true;
  });                               
       let month = {};
       month.month = week;
       month.value =  rowData(items,header);                                
       month.product = product;
       data_filter.push(month);
}