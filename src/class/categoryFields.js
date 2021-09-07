import fields from './formatFields.js';

export default function(category){
    return new Promise((rej)=>{

        switch(parseInt(category)){
            case 1 :       
                 rej(fields.fields);
            break;
             case 2 :          
                 rej(fields.fields);
            break;
            case 12 :          
                 rej(fields.fields);
            break;
             case 11 :            
                 rej(fields.fields);
            break;
            case 3 :          
                rej(fields.fieldsCattle);
            break;
             case 4 :           
                 rej(fields.fieldsCereals);
            break;
             case 10 :           
                 rej(fields.fieldsMilk);
            break;
        }
                 })

}