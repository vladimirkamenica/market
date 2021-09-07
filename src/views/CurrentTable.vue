<template>
  <div id="current-table">
      <b-container   class="mt-4">
          <b-row class="justify-content-center">
              <b-col class="text-center">
                  <h2>Cene za trenutno godinu i nedelju</h2>
              </b-col>
          </b-row>
          <b-row class="mt-4">
              <b-col>
                 <b-table striped stacked='xl' :items="tableObj" :fields="fields" class="bg-white" thead-class="greenColor"></b-table>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>

import findCurrentWeek from '../class/findCurrentWeek.js';


export default {
name: 'CurrentTable',
data(){
    return{
        fields: ['Proizvod', 'Beograd(Kalenić)','Beograd(Skadarlija)','Čačak','Niš','Sombor','Pančevo'],
        tableObj : [],
        year : new Date().getFullYear(),
        weeks : [],
        week : '',
        product : '',
        category : ''
    }

},
created(){
this.product = this.$route.params.product;
this.category = this.$route.params.category;
this.getWeek();


},
methods:{
     getWeek(){
        this.$axios.getWeeksStips(this.year)
                   .then(res =>{                             
                       this.week = findCurrentWeek(res);             
                       this.getTable(this.week,this.year,this.category,1);                    
                   })
    }, 
  getTable(week,year,category,type){
        this.$axios.getTableStips(category,year,week[0],type)
                   .then(res =>{
                       if(res != ''){
                              this.tableObj = res.filter(x=>{
                                if(x.Proizvod.replace(" ", "").includes(this.product)) return true;
                               }) 
                       }                   
                   })
  }
}
}
</script>

<style>
.greenColor {
    background-color: #03bd6f !important;
    color:white;
}
</style>