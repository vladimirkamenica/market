<template>
  <div id="animals-time">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="6">
            <h2>{{animals_title}}</h2>
          </b-col>
        </b-row>
          <b-row class="justify-content-center">
              <b-col cols="6">
                  <p v-html="animals_description"></p>
              </b-col>
          </b-row>
          <b-row class="justify-content-center">
               <b-col cols="3" >
                    <label for="name">Izabrana životinja: {{animal}}</label>
                    
                   
             </b-col>
             <b-col cols="3" class="d-flex align-items-center">
                  <!-- <b-avatar :variant="icon.color" size="40" class="ml-4">
                         <component :is="icon.img"></component>
                   </b-avatar> -->
                 
             </b-col>
          </b-row>
          <b-row class="justify-content-center mt-4">
               <b-col cols="6">
                 <label for="name">Unesite ime životinje:</label>
                 <b-input type="text" id="name" class="bg-white"></b-input>
          </b-col>
          </b-row>
          <b-row class="justify-content-center mt-3">
               <b-col cols="6" class="text-left">
                 <label for="name">Izaberite datum oplodnje:</label>
                
               
          </b-col>
          </b-row>
          <b-row class="justify-content-center mt-2">
               <b-col cols="6" class="text-left">
                 
                
                 <vc-date-picker :attributes='attrs' mode="single" :timezone="timezone" :value="startDate"  v-model="startDate"></vc-date-picker>

          </b-col>
          </b-row>
            <b-row class="justify-content-center mt-3">
               <b-col cols="6">
                 <label for="name">Očekivan datum:</label>
                 <b-input type="text" id="name" class="bg-white" v-model="end"></b-input>
          </b-col>
          </b-row>
           <b-row class="justify-content-center mt-2">
               <b-col cols="6">
                <p>Molimo, izaberite datum oplodnje. Ukoliko ne izaberete datum, onda se podrazumeva da je datum oplodnje današnji dan</p>
              </b-col>
          </b-row>
            <b-row class="justify-content-center mt-4">
               <b-col cols="6">
                <b-button class="btn-success" @click="format">Izračunajte</b-button>
              </b-col>
          </b-row>
         
      </b-container>
  </div>
</template>

<script>
import moment from 'moment';
import GlobalComponent from '../class/globalComponents.js';
import findIcon from '../class/findProductsIcon';
import animals from '../class/animals.js';

export default {
name: 'AnimalsTime',
data(){
    return{
        date : '',
        animal : '',
        animals : animals.animals,
        startDate : null,
        endDate : '',
        endDate1 : '',
        end : '',
        icon :'',
        timezone: '',
        title : '',
        animals_title:'',
        animals_description: '',
        filterAnimal : [],
         attrs: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
      ],
    }
},
components:{
...GlobalComponent
},
created(){
  this.title = this.$route.params.titleAnimal;
  this.format();
  this.icon = findIcon.find('Konj');
},
methods:{  
    filterAnimals(){
        return new Promise((res)=>{
              let animals = this.animals.filter(x=>{
       if(x.title.includes(this.title.split('-')[3])) return true;
     })
       res(animals);
        })
    },
    async format(){   
     this.filterAnimal = await this.filterAnimals();
     this.animals_title = this.filterAnimal[0].title;
     this.animals_description = this.filterAnimal[0].description;
     this.animal = this.filterAnimal[0].animal;
     let date = this.startDate == null ? moment().format("DD/MM/YYYY") :  moment(this.startDate).format("DD-MM-YYYY");
     this.endDate = moment(date, "DD-MM-YYYY").add("days", this.filterAnimal[0].from);
     this.endDate1 = moment(date, "DD-MM-YYYY").add("days", this.filterAnimal[0].to);
     if(this.filterAnimal[0].to > 0){
         this.end = moment(this.endDate).format("DD/MM/YYYY") + ' - ' +  moment(this.endDate1).format("DD/MM/YYYY");  
     }else{
         this.end = moment(this.endDate).format("DD/MM/YYYY")
     }   
     
   }
}
}
</script>

<style>

</style>