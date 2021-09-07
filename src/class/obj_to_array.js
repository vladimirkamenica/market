export default function(myData){
    let my_liste = []
    for (var i = 0; i < myData.length; i++) {
            let el = myData[i].value                       
            my_liste.push(el)
    }                                   
    return my_liste
}