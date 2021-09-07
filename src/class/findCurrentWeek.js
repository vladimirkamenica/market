import moment from 'moment';

export default function(weeks){
    let currentWeek = moment().locale('sr').week()-2;
    //let findweek = weeks.find(x=> x[1].split('(')[0].replace(/[. ]/g, '') == currentWeek);
//    let findweek = weeks.filter(x=> {
    
//       if(x[1].split('(')[0].replace(/[. ]/g, '') == currentWeek && parseInt(x[1].split('(')[2].split('=')[1].replace(')','')) > 0 ) return true;
//    })

   // console.log(findweek);
    return weeks.find(x=> x[1].split('(')[0].replace(/[. ]/g, '') == currentWeek);
}