<template>
  <div>
    <b-row> 
      <pie-cattle></pie-cattle>
      <sales-income></sales-income>  
  </b-row>
     <b-row>
     <b-col>
        <SellingProduct />
     </b-col>
    </b-row>
    <b-row  class="mt-4">
       <line-fruit></line-fruit>
       <pie-chart></pie-chart>     
    </b-row>
        <block-market></block-market> 
        <b-row>
        <b-col cols="12" l class="align-items-center mt-4">
      
          
          <weather></weather>
     
      </b-col>
        </b-row>
    <b-row>
      
        <b-col cols="12" lg="4" md="6" class="mt-4">
        <b-card class="mb-4 "  >
          <h4 class="card-title">Ogrebi sliku</h4>
          <hr>
          <scratch-card></scratch-card>
          <hr>
        </b-card>
     </b-col>
       <b-col cols="12" lg="4" md="6" class="mt-4">
          <animal-names></animal-names>
       </b-col>
        <b-col cols="12" lg="4" md="6" class="mt-4">
          <animals></animals>
       </b-col>
    </b-row>
   <b-row class="mt-4">
   
     <b-col>
        
      
     </b-col>
   </b-row>
    <!-- ----------------------------------------------- -->
    <!-- end top selling products -->
    <!-- ----------------------------------------------- -->
    <!-- ----------------------------------------------- -->
    <!-- cards row -->
    <!-- ----------------------------------------------- -->
   
    <!-- ----------------------------------------------- -->
    <!-- end cards row -->
    <!-- ----------------------------------------------- -->
    
  </div>
</template>

<script>
//import SalesSummary from "./dashboard-components/SalesSummary";
import SalesIncome from "./dashboard-components/SalesIncome";
import SellingProduct from "./dashboard-components/SellingProduct";
import LineFruit from "./LineFruit.vue";
import PieChart from "./PieData.vue";
import PieCattle from "./PieCattle.vue";
import AnimalNames from './AnimalNames.vue';
import Animals from './Animals.vue';


//import TopCards from "./dashboard-components/TopCards";
import Weather from '../components/weather/Weather2.vue';
import BlockMarket from '../components/stips/Block.vue';

import ScratchCard from '../components/scratch2/ScratchCard2.vue';
//import Proba from './dashboard-components/Proba.vue';

export default {
  name: "Starter",
  data: () => ({}),
  components: {
   // SalesSummary,
    SalesIncome,
    SellingProduct,
   // TopCards,
    Weather,
    ScratchCard,
    BlockMarket,
    LineFruit,
    PieChart,
    PieCattle,
    AnimalNames,
    Animals

   
  


  },
};
</script>
<style >
   .cardHeight{
     height: 500px;
   }
   .cardHeight2{
     height: 550;
   }
   .bg-block{
    background: rgba(255,255,255,0.8)
   }
   .img-bg{
    background-image: linear-gradient(rgba(223, 223, 223, 0.5), rgba(221, 221, 221, 0.2)), url("../assets/images/fruit.jpg");
    background-size: cover;
    
   }
   .img-bg-veg{
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.2)), url("../assets/images/vegetables.jpg");
    background-size: cover;
    
   }
   .img-bg-cattle{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("../assets/images/cattle.jpg");
    background-size: cover;
    
   }
    .img-bg-cereals{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("../assets/images/cereals.jpg");
    background-size: cover;
    
   }
    .img-bg-egs{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("../assets/images/egs.jpg");
    background-size: cover;
    
   }
     .img-bg-milk{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("../assets/images/cheese.jpg");
    background-size: cover;
   }
</style>