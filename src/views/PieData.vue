<template>
   <b-col cols="12" lg="6" md="6">
        <b-card class="mb-4 cardHeight">
          <h4 class="card-title">Cena povrća na pijacama - danas (u dinarima)</h4>   
         <pie-chart :data="data_filter"
                    :labels="products"
                    v-if="display"></pie-chart>
        </b-card>
       
    </b-col>	

  
</template>

<script>
import PieChart from './dashboard-components/Pie.vue'
//import moment from 'moment';
import weekendsByMonths from '../class/weekendsByMonths.js'
import priceByProducts from '../class/priceByProductsIncludes.js'
import findWeek from '../class/findCurrentWeek.js'
import formatWeek from '../class/formatWeek.js'

export default {
    name: 'PieData',
    components:{
        PieChart
    },
    data(){
      return {   
          current_month :"",
          display: false,
          header: ['Beograd','Niš','Leskovac','Subotoica','Šabac','Kikinda','Novi Sad'],         
            data_filter : [] ,         
            weeks: [],
            find_week : [],
            year : new Date().getFullYear(),
            data : [],
            datasetsBar: [],
            products :['Paprika',"Cvekla","Krompir","Šargarepa", "Krastavac"],
            category : 2,
            type : 1,
      }
    },
    created(){
       this.displayData();
    },
    methods:{  
       async displayData(){                    
             this.weeks = await this.$axios.getWeeksStips(this.year);       
             this.find_week = await weekendsByMonths(this.weeks,this.current_month);
             this.current_month = findWeek(this.weeks);
             this.getDataOfTable();
        },
       async getDataOfTable(){
          let data = await this.$axios.getTableStips(this.category,this.year,this.current_month[0],this.type);
          this.products.forEach(product => {
             priceByProducts(data,this.data_filter,product,this.header);         
          });
             if(this.data_filter.length == this.products.length) this.display = true;                                          
        },
        formatWeeks(week){
           return formatWeek(week);
        }
                         
     },

}
</script>

<style>

</style>