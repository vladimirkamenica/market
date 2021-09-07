<template>
  <b-col cols="12" lg="6" md="6">
        <b-card class="mb-4 cardHeight">
          <h4 class="card-title">Cena žitarica na pijacama - danas (u dinarima)</h4>       
         <bar-chart
         :labels="products"
         :data="data_filter"
         v-if="display"
         ></bar-chart>
        </b-card>      
    </b-col>	
</template>
<script>
import moment from 'moment';
import sortArray from 'sort-array';
import formatWeeks from '../../class/formatWeek.js';
//import sortObjectsArray from 'sort-objects-array';
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
//import GetItems from '../../class/chartDatasets.js'
import weekendsByMonths from '../../class/weekendsByMonths.js'
import currentWeek from '../../class/findCurrentWeek.js'

import BarChart from './BarChart.vue'
export default {
	name:"SalesIncome",
    components: {
    BarChart,
    // PulseLoader
    },
    data(){
      return {   
          current_month : parseInt(moment().locale('sr').format('M')),
          display: false,
          header: ['Beograd','Čačak','Požarevac','Kraljevo','Vranje','Loznica'],         
            data_filter : [] ,         
            weeks: [],
            current_week : [],
            find_week : [],
            year : new Date().getFullYear(),
            data : [],
            datasetsBar: [],
            products :['Stočni ječam',"Stočno brašno","Kukuruz","Pšenica", "Sojino zrno",],
      }
    },
    created(){ 
       this.displayData();
    },
    methods:{
      
     
       async displayData(){                    
             this.weeks = await this.$axios.getWeeksStips(this.year);  
             this.current_week = currentWeek(this.weeks );    
             this.find_week = await weekendsByMonths(this.weeks,this.current_month);
             this.getDataOfTable();
        },
         async getDataOfTable(){
          let data = await this.$axios.getTableStips(4,this.year,this.current_week[0],8);
          this.products.forEach(product => {
             this.priceByProducts(data,this.data_filter,product,this.header);         
          });
             if(this.data_filter.length == this.products.length) this.display = true;                                          
        },
         priceByProducts(data,data_filter,product,header){
     
       
        let items = data.filter(x=>{
        if(x.Proizvod.includes(product)) return true;
      });                               
         
           data_filter.push(this.rowData(items,header));
     
    
},
 rowData(data,header){

 
            let arr = []; 
             for (let i = 0; i < data.length; i++) {       
                for (let h = 0; h < header.length; h++) {
                 let price =  data[i][header[h]];
            if(price != '')arr.push(price);
             arr.push(0)                 
        }          
      }
      let arrsort = sortArray(arr,{ order: 'desc' });     
      return arrsort[0]     
       
         
     
 },
     formatWeek(week){
        return formatWeeks(week);
     }  
     
                         
     },
      
    
}    
</script>