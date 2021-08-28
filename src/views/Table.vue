<template>
  <div id="table">
  <b-container>
      <b-row>
          <b-col>
               <b-table striped hover :items="tableObj" :fields="fields"></b-table>
          </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import convertTableToObject from '../class/htmlTableToObj.js';

export default {
name: 'Table',
data(){
    return{
      fields: ['Proizvod', 'Beograd(Kalenić)','Beograd(Skadarlija)','Čačak'],
      items: [],
      product: '',
      year: '',
      week: '',
      tableObj: []
    }
},
created(){
this.product = this.$route.params.product;
this.year = this.$route.params.year;
this.week = this.$route.params.week;
this.getTable();
},
methods:{
  getTable(){
        this.$http.get('https://www.stips.minpolj.gov.rs/stips/ajax/nacionalni?kategorija='+12+'&godina='+this.year+'&nedelja='+this.week+'&format=html&izvor='+1+'')
                   .then(res =>{
                       console.log(res.data)
                       if(res.data.html != ''){
                              this.tableObj = convertTableToObject.convert(res.data.html);  
                              this.tableObj = this.tableObj.filter(x=>{
                                if(x.Proizvod.replace(" ", "") == this.product) return true;
                               }) 
                       }
                             
                      
                   })
  }
}
}
</script>

<style>

</style>