import sortArray from 'sort-array';
export default function(data,header){
    let arr = []; 
    for (let i = 0; i < data.length; i++) {       
       for (let h = 0; h < header.length; h++) {
        let price =  data[i][header[h]];
   if(price != '')arr.push(price);
    arr.push(0)                 
}          
}
let arrsort = sortArray(arr,{ order: 'desc' });     
return arrsort[0]   
}