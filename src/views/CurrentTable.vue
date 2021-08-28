<template>
  <div id="current-table">
      <b-container class="mt-4">
          <b-row class="justify-content-center">
              <b-col class="text-center">
                  <h2>Cene za trenutno godinu i nedelju</h2>
              </b-col>
          </b-row>
          <b-row class="mt-4">
              <b-col>
                 <b-table striped  :items="tableObj" :fields="fields" class="bg-white" thead-class="greenColor"></b-table>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import convertTableToObject from '../class/htmlTableToObj.js';
import moment from 'moment';

export default {
name: 'CurrentTable',
data(){
    return{
        fields: ['Proizvod', 'Beograd(Kalenić)','Beograd(Skadarlija)','Čačak','Niš','Sombor'],
        tableObj : [],
        year : new Date().getFullYear(),
        weeks : [],
        week : '',
        product : '',
        currentWeek : moment().week()-1,
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
        this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/${this.year}`)
                   .then(res =>{
                       this.weeks = res.data.result.nedelje;
                      
                       this.week = this.weeks.filter(x=>{
                           if(x[1].split('(')[0].replace(/[. ]/g, '') == this.currentWeek) return true;
                       })
                  
                       this.getTable(this.week,this.category);
                     
                   })
    }, 
  getTable(week,category){
        this.$http.get('https://www.stips.minpolj.gov.rs/stips/ajax/nacionalni?kategorija='+category+'&godina='+this.year+'&nedelja='+week[0][0]+'&format=html&izvor='+1+'')
                   .then(res =>{
                       if(res.data.html != ''){
                              this.tableObj = convertTableToObject.convert(res.data.html);  
                              this.tableObj = this.tableObj.filter(x=>{
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