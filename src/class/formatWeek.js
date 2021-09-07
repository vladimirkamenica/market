export default function(week){
    try{
        let space = week.split(' ');
        let bracket = space[1].replace(/[()]/g, '');
        let dolar = bracket.split('$');
        let line = dolar[0].replace('-',' do  ');
        return line;
    }catch(err){
        console.log(err);
    }
}