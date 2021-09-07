<template>
  <div id="table">
  <b-container fluid class="m-0 p-0">
    <b-row class="justify-content-center">
              <b-col class="text-center">
                  <h2>Cene za {{year}} godinu od {{fromweek}}</h2>
              </b-col>
          </b-row>
      <b-row>
          <b-col>
            <table-fruit :table_fields="table_fields" :stacked="stacked" :items_table="tableObj"></table-fruit>
          </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import GlobalComponent from '../class/globalComponents.js'
import TableFruit from '../components/DisplayTable/Table.vue'
import categoryFields from '../class/categoryFields.js';

export default {
name: 'Table',
components:{
...GlobalComponent,
TableFruit
},
computed:{

},
data(){
    return{
      table_fields : [],
      tableObj: [],
      stacked: 'xl',
      items: [],
      product: '',
      year: '',
      week: '',
      fromweek: '',
      category: '',
      source : '',
    }
},
async created(){
this.product = await this.$route.params.product;
this.year = await this.$route.params.year;
this.week = await this.$route.params.week;
this.category = await this.$route.params.category;
this.source = await this.$route.params.source;
this.fromweek = await this.$route.params.fromweek;
await this.getTable(this.source,this.product);
},
methods:{ 
  async getTable(source,product){
              this.table_fields = await categoryFields(this.category);
              let data = await this.$axios.getTableStips(this.category,this.year,this.week,source);
              this.tableObj = data.filter(x=>{
                                if(x.Proizvod.replace(" ", "").includes(product)) return true;
                               }) 
                 
  },
  
    
}
}
</script>

<style>
.greenColor {
    background-color: #03bd6f !important;
    color:white;
}
</style>