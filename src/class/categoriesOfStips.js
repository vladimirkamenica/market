import axios from 'axios';
export default function(){
    let categories = []
    axios.get('http://localhost:8000/api/web-scraper')
    .then(res =>{
        let parser = new DOMParser();
        let html = parser.parseFromString(res.data.input, "text/html").body;
        let label = html.getElementsByTagName('label');
        for (let i = 0; i < label.length; i++) {
            let obj = {};
            obj.description = label[i].innerText;
            obj.value = label[i].getElementsByClassName('radiolist')[0].value;
            categories.push(obj);                                   
        }
    
    })
    return categories;
}