<template>
  <b-col cols="12" lg="6" md="6" >  
        <b-card class="mb-4 cardHeight ">
           <b-row >
          <b-col>
            <h4 class="card-title">Cena voća na pijacama - danas (u dinarima)</h4>
            <h6 class="card-title text-info font-weight-bold m-0 p-0">{{year}}</h6>

          <LineChart v-if="display" 
           :apple="data_apple"
           :pear="data_pear"
           :plum="data_plum"
           :peach="data_peach"
           :raspberry="data_raspberry"
          :labels="labels"
          :load="display"/>
          </b-col>
        </b-row>
         <b-row >
          <b-col class="text-center" >
             <pulse-loader  :loading="!display"></pulse-loader>
          </b-col>
        </b-row>      
        </b-card>
    </b-col>	
</template>

<script>
import LineChart from './dashboard-components/LineChart.vue';
import moment from 'moment';
//import sortArray from 'sort-array';
import sortObjectsArray from 'sort-objects-array';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import weekendsByMonths from '../class/weekendsByMonths.js'
import checkCurrentMonth from '../class/checkCurrentMonth.js'
import priceByProducts from '../class/priceByProducts.js'
import obj_to_array from '../class/obj_to_array.js'




// import GetItems from '../../class/chartDatasets.js'
// import { mapGetters } from "vuex";
//let myarray = [];
export default {
name: "LineFruit",
data(){
    return {
            current_month : parseInt(moment().locale('sr').format('M')),
            display: false,
            header: ['Beograd(Kalenić)','Beograd(Skadarlija)','Čačak','Loznica','Kraljevo','Niš','Subotica'],     
            products : ['Jabuka (ostale)v:srednja p:standardno','Kruška (ostale)v:srednja p:standardno','Šljiva (sve sorte)v:srednja p:standardno','Breskva (sve sorte)v:srednja p:standardno','Malina (sve sorte)v:srednja p:standardno'],    
            data_filter : [] ,  
            data_apple: [],   
            data_pear: [],       
            data_plum:[] ,   
            data_peach: [],       
            data_raspberry : [],
            weeks: [],
            find_week : [],
            year : new Date().getFullYear(),
            my_data : {},     
             labels: [
                     "Januar",
                     "Februar",
                     "Mart",
                     "April",
                     "Maj",
                     "Jun",
                     "Jul",
                     "Avgust",
                     'Septembar',
                     'Oktobar',
                     'Novenbar',
                     'Decembar',
        
                   ],
                   all : []
        } 
},
components:{
  LineChart,
  PulseLoader
},
async created(){
 await this.displayData();
},
methods:{
async displayData(){       
             this.weeks = await this.$axios.getWeeksStips(2021);       
             this.find_week = await weekendsByMonths(this.weeks,this.current_month);
             this.current_month = checkCurrentMonth(this.weeks,this.current_month) == true ? this.current_month - 1 : this.current_month;         
             this.labels = this.labels.slice(0,this.current_month);        
             this.getItemsBySortWeekends(this.find_week,this.products);
                   
          },     
       getItemsBySortWeekends(find_week,datasets){
            let find_week_Sort = find_week.sort();     
            for(let p = 0; p < datasets.length; p++){
          for (let i = 0; i < find_week_Sort.length; i++) {
               this.getDataOfTable(find_week_Sort[i],datasets[p],this.current_month);           
         }
             }          
     },
     async getDataOfTable(weeks,product){
          let data = await this.$axios.getTableStips(1,2021,weeks,1);
          priceByProducts(data,this.data_filter,weeks,product,this.header);           
               for (let i = 0; i < this.products.length; i++) {
           let sort = sortObjectsArray(this.data_filter.filter(x=>{
              if(x.product == this.products[i]) return true;
              }),'month');
              if(i == 0)this.data_apple = obj_to_array(sort); 
              else if(i==1) this.data_pear = obj_to_array(sort);  
              else if(i==2) this.data_plum = obj_to_array(sort);                                                             
              else if(i==3) this.data_peach = obj_to_array(sort);  
              else if(i==4) this.data_raspberry = obj_to_array(sort);                                                             
        } 
        if(this.data_raspberry.length == this.current_month) this.display = true;                        
     },
}
}
</script>

<style>

</style>