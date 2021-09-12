<template>
  <div id="years">
      <b-container fluid>
          <b-row>
            <b-col>
                  <b-card
                   header-tag="header"
                   header-bg-variant="light-secondary"
                  >   
                   <template class="bg-dark" #header >
                       <b-row class="align-items-center">
                          <b-col>
                            <h5 class="mb-0 text-dark">Cena {{formatProduct(description)}} na pijacama </h5>
                            <h6 class="mb-0 text-info">ponuda {{formatProduct(description)}} na pijacama u Srbiji</h6>

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
                      <b-row class="mt-2" v-if="checkLengthItems(tableObj)">
                          <b-col v-if="display_current">
                              <hr>
                               <h5 class="mb-0 text-secondary">Današnja cena:</h5>
                                 <table-fruit :stacked="stacked" :table_fields="table_fields" :items_table="tableObj"></table-fruit>
                                  
                               <!-- <b-link class="text-secondary" :to="{name: 'Table',params:{product: product,year: select_year,week : find_week[0],category : category,source : source,fromweek : formatWeek(find_week[1])}}"> 
                              <h5>Cena {{formatProduct(description)}} na pijacama za mesec {{findMonth(find_week[1])}}, od {{formatWeek(find_week[1])}}</h5>
                     </b-link>   -->
                             <hr>
                          </b-col>
                      </b-row>
                      <b-row class="mt-5">
                          <b-col>
                                  <div id="my-category"  v-for="week in weeks" :key="week[0]">
                    
                      <b-link class="text-secondary" :to="{name: 'Table',params:{product: product,year: select_year,week : week[0],category : category,source : source,fromweek : formatWeek(week[1])}}"> 
                          <h5>Cena <span class="text-info">{{formatProduct(description)}}</span>  na pijacama za mesec <span class="text-info">{{findMonth(week[1])}}</span>, od {{formatWeek(week[1])}}</h5>
                     </b-link>  
                    <hr>
                    </div>        
                          </b-col>
                      </b-row>
                     <stips-site></stips-site>

                       
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import range from '../class/range.js';
import formatWeeks from '../class/formatWeek.js';
import TableFruit from '../components/DisplayTable/Table.vue'
import categoryFields from '../class/categoryFields.js';
import moment from 'moment';

export default {
    name: "Weeks",
    components:{
      TableFruit
    },
    data(){
        return{
            years: range(2010,new Date().getFullYear()),
            stacked: 'xl',
            category: '',
            description : '',
            select_year : 2021,
            weeks: [],
            product : '',
            currentWeek : moment().week()-1,
            find_week : 0,
            display_current : true,
            source : '',
            table_fields : [],
            tableObj: [],
            display_table : true,

        }
    },
     async created(){
        await this.getWeek();
        this.product = this.$route.params.product;
        this.category = this.$route.params.category;
        this.description = this.$route.params.description;
        this.source = this.$route.params.source;
        await this.getTable(this.source,this.product)


    },
    methods:{
        formatProduct(description){
          let space = description.split(' ');
          return space[1];
          
        },
       async getWeek(){
            this.display_current = this.select_year == new Date().getFullYear() ? true : false;
            this.weeks = await this.$axios.getWeeksStips(this.select_year)
            this.find_week = this.weeks.find(x=> x[1].split('(')[0].replace(/[. ]/g, '') == this.currentWeek);
            this.weeks = this.filterWeeks(this.weeks,this.select_year,this.currentWeek);      
        },
        filterWeeks(weeks,year,current){
                if(year == new Date().getFullYear()){
                    return  weeks.filter(x=>{
                        if(x[1].split('(')[0].replace(/[. ]/g, '') <= current) return true;
                    })
                }
                else{
                    return weeks;
                }
        },
        findMonth(week){
           try {
                 let line = week.split('-');
                 let bracket = line[0].split('(');
                 let date = bracket[1];
                 let dot = date.split('.');
                 let create = dot[1]+"."+dot[0]+"."+dot[2]+".";  
                 moment.locale('sr');      
                 let newDate = moment(create).format('MMMM');
                 return newDate;
           } catch (error) {
               console.log(error)
           } 
        
        },
        formatWeek(week){
             return formatWeeks(week);
    },
    async getTable(source,product){
              this.table_fields = await categoryFields(this.category);        
              let data = await this.$axios.getTableStips(this.category,2021,this.find_week[0],source);
               this.tableObj =  data.filter(x=>{
                                if(x.Proizvod.includes(product)) return true;
                              
                               }) 

                 
  },
  checkLengthItems(items){
      return items.length > 0 ? true : false;
  }
    }

}
</script>

<style>

</style>