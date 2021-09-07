import arrToObj from 'array-to-object';

export default class tableToobject{

    static convert(table){
        let parser = new DOMParser();
        //  let table = document.getElementById('my-table').innerHTML;
         const doc3 = parser.parseFromString(table, "text/html").body;
         let t = doc3.getElementsByTagName('table');
         let list = this.ttable_to_array(t)  
         let w = list[1].indexOf('week');
         let y = list[1].indexOf('year');

         for (let index = 2; index < list.length; index++) {
             list[index][w] = this.select_week;             
             list[index][y] = this.select_year;             
         }
         let arr = [];
    for (let index = 2; index < list.length; index++) {
         var object = {};
         object = arrToObj(list[1], list[index]);
         arr.push(object);
    }

    //   return arr.filter(x=>{
    //       if(x.Proizvod.toLowerCase().includes("kruške") || x.Proizvod.toLowerCase().includes("kruška")  ) return true;
    //   });
        return arr;
    }
    static ttable_to_array(table_id){
        let myData = table_id[0].rows
          
                    let my_liste = []
                    for (var i = 0; i < myData.length; i++) {
                            let el = myData[i].children
                            let my_el = []
                            for (var j = 0; j < el.length; j++) {
                                    my_el.push(el[j].innerText);
                            }
                            my_liste.push(my_el)
                    }
                       my_liste[0].splice(my_liste[0].indexOf('Centralna Srbija'),1);
                       my_liste[0].splice(my_liste[0].indexOf('Vojvodina'),1);

                       for (let i = my_liste[0].length-1; i >= 0; --i) {
                          my_liste[1].unshift(my_liste[0][i]);                         
                       }                     
                    return my_liste
    }


}