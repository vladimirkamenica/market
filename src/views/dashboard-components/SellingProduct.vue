<template>
<div >
  <b-card>
   <b-card-body>
        <b-link :to="{name: 'Category'}"><h4 class="card-title text-dark">Cene na pijacama</h4></b-link>        
        <h6 class="card-subtitle font-weight-normal text-muted">
          cene se odnose na period <span class="text-info font-weight-bold">od {{formatWeek(week[1])}}</span> u dinarima
        </h6>
  <div class="table-responsive ">
      <table-fruit :table_fields="fields" small  :stacked="stacked" :height="height" :items_table="items"></table-fruit>
   
  </div>
  
  <div id="progress">
    <b-row>
      <b-col>
    
      </b-col>
      </b-row>
    <b-row class="align-items-center">
      <b-col cols="auto" class="align-items-center">
      <b-button  :class="play == true ? `btn-danger` : `btn-success`" @click="Stop">
        <font-awesome-icon v-if="play" :icon="['fa', 'pause']" />
        <font-awesome-icon v-if="!play" :icon="['fa', 'play']" />
      </b-button>
      <b-button class="btn-info ml-1" @click="Next"><font-awesome-icon :icon="['fa', 'chevron-right']" /></b-button>
      <b-button class="btn-info ml-1" @click="Back"><font-awesome-icon  :icon="['fa', 'chevron-left']" /></b-button>
      </b-col>
      <b-col  class="align-items-center">
      <b-progress :value="value" :max="max" show-value variant="info" class="bg-light" style="height: 15px"></b-progress>
        
      </b-col>
    </b-row>
     
  </div>
     
      </b-card-body>
</b-card>

  </div>
</template>

<script>
import formatWeeks from '../../class/formatWeek.js';
import categoriesOfstips from '@/class/categoriesOfStips.js';
import findCurrentWeek from '@/class/findCurrentWeek.js';
import GlobalComponent from '../../class/globalComponents.js'
import IconProduct from '../../class/iconProduct.js'
import FindIcon from '../../class/findProductsIcon.js'
import TableFruit from '../../components/DisplayTable/Table.vue'
import categoryFields from '../../class/categoryFields.js';


export default {
	name:"SellingProduct",
  data(){
    return{
      fields : [],
       value: 0,
        max: 100,
        end : false,
        stacked: 'none',
        height: 700,
        play: true,
        categories : categoriesOfstips(),
        year : new Date().getFullYear(),
        items : [],
        week : {},
        listEggs : [],
        listFruit : [],
        listMilk : [],
        listVegetables : [],
        intervalID : null,
        i : 0,
        icon : IconProduct.icon
    }
  },
  components: {
    ...GlobalComponent,
    TableFruit
  },
  created(){
     
      this.getWeek();
     // this.moveMy();
  },
  methods:{
    findIcon(data){
       let name  = data.split(' ')[0];
       return FindIcon.find(name);
       
    },
   async getWeek(){
      let data = await this.$axios.getWeeksStips(this.year);
       this.week = findCurrentWeek(data);  
                       this.getTableEggsFruit();
                       this.moveMy();
                     //  this.getTableInterval();  
    }, 
   async getTableEggsFruit(){
          let arr = [];
          this.fields = await categoryFields(12);
          let data = await this.$axios.getTableStips(12,this.year,this.week[0],1);
           this.listEggs = data.splice(0,5);
                    this.listEggs.forEach(list=>{
                      arr.push(list);
                    })
           let data1 = await this.$axios.getTableStips(1,this.year,this.week[0],1);
                  this.listFruit = data1.splice(0,5);
                this.listFruit.forEach(list=>{
                    arr.push(list);
                    })
                    this.items = arr;
    },
    async getTableMilkVegetables(){
          let arr = [];
         this.fields = await categoryFields(11);
         let data = await this.$axios.getTableStips(11,this.year,this.week[0],1);
        this.listMilk = data.splice(0,5);
                    this.listMilk.forEach(list=>{
                      arr.push(list);
                    })
                    let data1 = await this.$axios.getTableStips(2,this.year,this.week[0],1);
         this.listVegetables = data1.splice(0,7);
                this.listVegetables.forEach(list=>{
                      arr.push(list);
                    })
          this.items = arr;
    },
    Stop(){
      this.play = !this.play;
      clearInterval(this.intervalID);
      if(this.play)this.intervalID = setInterval(this.frame, 100);  
    },
    Back(){
          if(this.i == 0){      
          this.end = true;
         }else{
           this.i--;
          this.end = false;
           clearInterval(this.intervalID);
           if(this.play)this.intervalID = setInterval(this.frame, 100);  
           this.nextItem();
         }
    },
    nextItem(){
           let category = this.categories[this.i].value;  
           this.items = [];              
           this.displayItems(category)     
    },
    Next(){
         if(this.i >= 6){
         this.end = true;
         }else{
           this.i++;
          this.end = false;
           clearInterval(this.intervalID);
           if(this.play)this.intervalID = setInterval(this.frame, 100);  
          this.nextItem();

         }
    },
    moveMy() {
  if (this.play) {
  this.value = 1;
    this.intervalID = setInterval(this.frame, 100);  
  }
},
   frame() {
      if (this.value >= 100) {
          if(this.i < this.categories.length-1){
                   this.i = this.i + 1;
                   let category = this.categories[this.i].value;  
                   this.items = [];              
                   this.displayItems(category)
                   clearInterval(this.intervalID);
                   this.moveMy();
            }else if(this.i == this.categories.length-1){
              clearInterval(this.intervalID);
              this.i = 0;
              this.items = [];              
              this.getTableEggsFruit();
              this.moveMy();
            }
      } else {
        this.value = this.value+1;
      }
    },
    //  getTableInterval(){
      
    //  let change = setInterval(()=>{    
                
    //         if(this.i < this.categories.length-1){
    //                this.i = this.i + 1;
    //                let category = this.categories[this.i].value;  
    //                this.items = [];              
    //                this.displayItems(category)
    //         }else if(this.i == this.categories.length-1){
    //           clearInterval(change);
    //           this.i = 0;
    //           this.items = [];              
    //           this.getTableEggsFruit();
    //           this.getTableInterval();
    //         }
    //    },10000);
      
    //  },
     formatWeek(week){
        return formatWeeks(week)
     },
     fullName(val){
       return val.replace('v:srednja p:standardno','');
     },
    async displayItems(category){
           switch(category){
                 case '12':
                         this.getTableEggsFruit();
                   break;
                 case '3':
                    this.fields = await categoryFields(3);
                    var data4 = await this.$axios.getTableStips(category,this.year,this.week[0],4);                
                    this.items = data4.splice(0,10);
                   break;  
                   case '11':
                     this.getTableMilkVegetables();
                     break;
                      case '10':
                     this.getTableMilkVegetables();
                     break;
                      case '2':
                     this.fields = await categoryFields(2);
                     var data = await this.$axios.getTableStips(category,this.year,this.week[0],1);
                     this.items = data.splice(0,10);
                     break;
                     case '1':
                     this.fields = await categoryFields(1);
                     var data1 = await this.$axios.getTableStips(category,this.year,this.week[0],1);
                     this.items = data1.splice(0,10);
                     break;
                     case '4':
                     this.fields = await categoryFields(4);
                     var data3 = await this.$axios.getTableStips(category,this.year,this.week[0],8);
                     this.items = data3.splice(0,10);
                     break;
           }
     }
  },
}    
</script>
<style >
.table-timeout{
  height: 700px;
}
</style>