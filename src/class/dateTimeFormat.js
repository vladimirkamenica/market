export default function(type,input){
    let a = new Date(input * 1000);
    let months = ['Januar','Februa','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'];
    let days = ["Ned","Pon", "Uto", "Sre", "Čet", "Pet","Sub"];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let day =days[a.getDay()];
    // let min = a.getMinutes();
    // let sec = a.getSeconds();
    // let h = a.getHours();
    let format ="";
    switch(type)
    {
        case "current":
            format = date + ' ' + month + ' ' + year;
         break;
       case "day":
           format = day + date;
         break;
         case "month":
            format = month; 
           break;
    }
    return format;

}