import rowData from './rowData.js'
export default function(data,data_filter,product,header){
    let items = data.filter(x=>{
        if(x.Proizvod.includes(product)) return true;
      });                                      
           data_filter.push(rowData(items,header));  
}