<template>
  <div id="stips">
      <b-container fluid>
          <b-row>
              <b-col cols="3">
                  <select name="category" id="category" class="form-control" v-model="select_category" @change="getSource">
                    <option  v-for="category in categories" :key="category.value" :value="category.value">{{category.description}}</option>
                 </select>
                  
              </b-col>
              <b-col cols="3">
                 <select name="years" id="years" class="form-control" v-model="select_year" @change="getWeek">
                    <option  v-for="year in years" :key="year" :value="year" >{{year}}</option>
                 </select>
              </b-col>
              <b-col cols="3">
                <select name="weeks" id="weeks" class="form-control" v-model="select_week" >
                    <option  v-for="week in weeks" :key="week[0]" :value="week[0]">{{week[1]}}</option>
                 </select>
              </b-col>
              <b-col>
                  <select name="sources" id="sources" class="form-control" v-model="select_source">
                    <option  v-for="source in sources" :key="source[0]" :value="source[0]">{{source[1]}}</option>
                 </select>

              </b-col>
              <b-col>
                  <button class="btn btn-info" @click='find'>Prikaži</button>
                 <h5>{{len}}</h5>
                

              </b-col>
          </b-row>
               <b-row>
                   <b-col id="my-table" v-html="table" ref="table">

                   </b-col>
               </b-row>
      </b-container>
  </div>
</template>

<script>

import convertTableToObject from '../class/htmlTableToObj.js';
import categoriesOfstips from '../class/categoriesOfStips.js';
export default {
name: 'Stips',
data(){
    return{
        table : '',
        years : '',
        weeks : '',
        sources : '',
        select_year: '',
        select_week: '',      
        select_source: '',
        select_category: '',
        categories : categoriesOfstips(),
        tableObj : [],
        len : 0

    }
},
created(){
  
   this.getStipsItem();
   
   
},
methods:{
     getStipsItem(){
      var currentTime = new Date()
      var now = currentTime.getFullYear()
      var day = currentTime.getDay();
      var month = currentTime.getMonth();

      
      console.log(this.weeksInYear(now,day,month))
      this.years = this.range(2010,now).reverse();
      this.select_year = now;
      this.select_category = 12;
      this.select_source = 1;
      this.getSource();
      this.getWeek();
                      
    },
   range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    },
    getWeek(){
        this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/${this.select_year}`)
                   .then(res =>{
                       this.weeks = res.data.result.nedelje;
                     
                   })
    }, 
    getSource(){
       this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/izvori_za_kategoriju/${this.select_category}`)
                   .then(res =>{
                      this.sources = res.data.result.izvori;
                   })
    },
    find(){
      
           this.$http.get('https://www.stips.minpolj.gov.rs/stips/ajax/nacionalni?kategorija='+this.select_category+'&godina='+this.select_year+'&nedelja='+this.select_week+'&format=html&izvor='+this.select_source+'')
                   .then(res =>{
                       this.table = res.data.html   
                       this.tableObj = convertTableToObject.convert(res.data.html);   
                       this.len = this.tableObj.length;   
                   })
                   
    },
  
  weeksInYear(year,day,month) {
  var d = new Date(year, day, month);
  var week = this.getWeekNumber(d)[1];
  return week == 1 ? 52 : week;
},
getWeekNumber(d) {
  d = new Date(+d);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  var yearStart = new Date(d.getFullYear(), 0, 1);
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
  return [d.getFullYear(), weekNo];
}
}
}
</script>

<style>
#my-table{
    overflow: auto;
}
#my-table table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
#my-table table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
#my-table table th,
#my-table table td {
    padding: 12px 15px;
}
#my-table table tbody tr {
    border-bottom: 1px solid #dddddd;
}

#my-table table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

#my-table table tbody  {
    border: 1px solid #c2c2c2;
}
#my-table table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>