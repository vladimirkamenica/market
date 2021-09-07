

export default function(weeks,current_month){
    let find  = weeks.filter(x=>{
        if(x[1].split(' ')[1].replace(/[()]/g, '').split('$')[0].split('.')[1] == current_month) return true;
      })                     
       let checkNull = parseInt(find[2][1].split(' ')[1].replace(/[()]/g, '').split('$')[1].replace('=',''));
       
        if(checkNull == 0)return true;
       return false;
}         