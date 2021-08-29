<template>
  <div id="years">
      <b-container>
          <b-row>
              <b-col class="d-none">
                  <b-card
                   header-tag="header"
                   header-bg-variant="secondary"
                  >   
                   <template class="bg-dark" #header >
                      <h5 class="mb-0 text-white">Godine</h5>
                  </template>   
                  <b-card-body>
                  <div id="my-category" v-for="(year,i) in years" :key="i">
                      <b-link class="text-secondary" > <h5>{{year}}</h5></b-link>  
                    <hr>
                    </div>                 
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
                  <b-col>
                  <b-card
                   header-tag="header"
                   header-bg-variant="light-secondary"
                  >   
                   <template class="bg-dark" #header >
                       <b-row class="align-items-center">
                          <b-col>
                            <h5 class="mb-0 text-dark">Nedelje</h5>

                           </b-col>
                           <b-col >
                             
                       </b-col>
                       </b-row>
                  </template>   
                  <b-card-body>
                      <b-row>
                          <b-col cols="4">
                               <h5 class="mb-0 text-secondary">Izaberi godinu</h5>
                            <select name="years" id="years" class="form-control bg-white" v-model="select_year" @change="getWeek">
                                <option  v-for="year in years" :key="year" :value="year" >{{year}}</option>
                           </select>
                          </b-col>
                      </b-row>
                      <b-row class="mt-2">
                          <b-col>
                              <hr>
                               <h5 class="mb-0 text-secondary">Trenutna cena</h5>

                               <b-link class="text-secondary" > 
                          <h5>Cena {{product}} na pijacama za mesec {{findMonth(week[0][1])}}, nedelja - {{week[0][1]}}</h5>
                     </b-link>  
                             <hr>
                          </b-col>
                      </b-row>
                      <b-row class="mt-5">
                          <b-col>
                                  <div id="my-category"  v-for="(week,i) in weeks" :key="i">
                    
                      <b-link class="text-secondary" > 
                          <h5>Cena {{product}} na pijacama za mesec {{findMonth(week[1])}}, nedelja - {{week[1]}}</h5>
                     </b-link>  
                    <hr>
                    </div>        
                          </b-col>
                      </b-row>
                       
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import range from '../class/range.js';
import moment from 'moment';

export default {
    name: "Weeks",
    data(){
        return{
            years: range(2010,new Date().getFullYear()),
            category: '',
            select_year : 2021,
            weeks: [],
            product : '',
            currentWeek : moment().week()-1,
            week : ''

        }
    },
    created(){
        this.product = this.$route.params.product;
        this.getWeek();
    },
    methods:{
        getWeek(){
            this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/${this.select_year}`)
                   .then(res =>{
                       this.weeks = res.data.result.nedelje;    
                         this.week = this.weeks.filter(x=>{
                           if(x[1].split('(')[0].replace(/[. ]/g, '') == this.currentWeek) return true;
                       })
                  
                                     
                   })
        },
        findMonth(week){
          let line = week.split('-');
          let bracket = line[0].split('(');
          let date = bracket[1];
          let dot = date.split('.');
          let create = dot[1]+"."+dot[0]+"."+dot[2]+".";  
          moment.locale();      
          let newDate = moment(create).format('MMMM')
          console.log(moment().week()-1);
          return newDate;
        }
    }

}
</script>

<style>

</style>