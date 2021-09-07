<template>

   <b-col cols="12" lg="6" md="6" >  
        <b-card class="mb-4 cardHeight ">
           <b-row >
          <b-col>
            <h4 class="card-title">Grafik cena u dinarima voća na pijacama</h4>
            <h6 class="card-title text-info font-weight-bold m-0 p-0">{{year}}</h6>

          <LineChart v-if="display" 
          :datasets="datasets"
          :labels="labels"
          :load="display"/>
          </b-col>
        </b-row>
         <b-row >
          <b-col class="text-center" >
             <pulse-loader  :loading="!getDisplay"></pulse-loader>{{view(getDisplay)}}
          </b-col>
        </b-row>      
        </b-card>
    </b-col>	
    
 
</template>

<script>

import LineChart from './LineChart2.vue';
import moment from 'moment';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import GetItems from '../../class/chartDatasets.js'
import { mapGetters } from "vuex";

export default {
	name:"SalesSummary",
    data(){
        return{
       
          current_month : parseInt(moment().locale('sr').format('M')),
          display: false,
            header: ['Beograd(Kalenić)','Beograd(Skadarlija)','Čačak','Loznica','Kraljevo','Niš','Subotica'],         
            data_filter : [] ,         
            weeks: [],
            find_week : [],
            year : new Date().getFullYear(),
            my_data : {}  ,
            datasets :[
                    {
                      label: 'Jabuka (ostale)v:srednja p:standardno',
                      borderColor: "#1ec94c",
                      pointBackgroundColor: "white",
                      borderWidth: 2,
                      backgroundColor: "rgba(30, 201, 76,0.3)",
                      data: []            
                    },
                     {
                       label: "Kruška (ostale)v:srednja p:standardno",
                       borderColor: "#05CBE1",
                       pointBackgroundColor: "white",
                       borderWidth: 2,
                       backgroundColor: "rgba(41, 98, 255,0.3)",
                       data: []
                    },
                     {
                       label: "Šljiva (sve sorte)v:srednja p:standardno",
                       borderColor: "#1e40c9",
                       pointBackgroundColor: "white",
                       borderWidth: 2,
                       backgroundColor: "rgba(30, 64, 201,0.3)",
                       data:[]
                    },
                     {
                       label: "Breskva (sve sorte)v:srednja p:standardno",
                       borderColor: "#f54842",
                       pointBackgroundColor: "white",
                       borderWidth: 2,
                       backgroundColor: "rgba(201, 50, 30,0.3)",
                       data: []
                    },
                    {
                       label: "Malina (sve sorte)v:srednja p:standardno",
                       borderColor: "#e7f525",
                       pointBackgroundColor: "white",
                       borderWidth: 2,
                       backgroundColor: "rgba(231, 245, 37,0.3)",
                       data: []
                    },
            ],
         
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
        }
        
    },
     computed: {

      ...mapGetters([
            'getDisplay',
            
            ]
        ),
  },
    components: {
       LineChart,
       PulseLoader
    },
   created(){
   // this.displayData();
  
    },
    methods:{
      view(val){
            this.display = val;
      },
      chcekMonthNull(weeks){
      let currentMonth  = weeks.filter(x=>{
                         if(x[1].split(' ')[1].replace(/[()]/g, '').split('$')[0].split('.')[1] == this.current_month) return true;
                       })                     
                        let checkNull = parseInt(currentMonth[2][1].split(' ')[1].replace(/[()]/g, '').split('$')[1].replace('=',''))  ;
                         if(checkNull == 0)this.current_month = this.current_month - 1;
                         
      },
      weekendsByMonths(weeks){
                 for (let i = 1; i <= this.current_month; i++) {
                  
                       let wik  = weeks.filter(x=>{
                         if(x[1].split(' ')[1].replace(/[()]/g, '').split('$')[0].split('.')[1] == i) return true;
                       })
              
                       this.find_week.push(wik[2][0]); 
                       }
      },
     
     displayData(){                 
             this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/${this.year}`)
                   .then(res =>{
                        this.weeks = res.data.result.nedelje;                    
                        this.chcekMonthNull(this.weeks);
                        this.labels = this.labels.slice(0,this.current_month);
                        this.weekendsByMonths(this.weeks);                   
                        GetItems.getItemsBySortWeekends(1,1,this.datasets,this.find_week,this.year,this.current_month,this.data_filter,this.header);
                   })        
                   
                 
        },
       
        
    
    },

  watch: {
    count (newCount) {
      // Our fancy notification (2).
      console.log(`We have ${newCount} fruits now, yay!`)
    }
  }
}    
</script>