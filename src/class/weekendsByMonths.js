export default async function(weeks,current_month){
    return new Promise((res,rej)=>{
        try {
          let result = [];
           for (let i = 1; i <= current_month; i++) {            
                       let wik  = weeks.filter(x=>{
                         if(x[1].split(' ')[1].replace(/[()]/g, '').split('$')[0].split('.')[1] == i) return true;
                       })          
                       result.push(wik[2][0]); 
                       }
            res(result)
        } catch (err) {
          rej(err)
        }
      })
}