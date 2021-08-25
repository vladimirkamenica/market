<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->
    
    
    <b-row class="mt-4">
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1 ">+70%</h4>
          <b-card-text class="mb-2">Total Sales</b-card-text>
          <b-progress value="70" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">-10%</h4>
          <b-card-text class="mb-2">Monthly Sales</b-card-text>
          <b-progress variant="danger" value="10" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">50%</h4>
          <b-card-text class="mb-2">Yearly Sales</b-card-text>
          <b-progress variant="success" value="50" max="100"></b-progress>
        </b-card>
      </b-col>
      <b-col cols="12" md="6" lg="3">
        <b-card class="mb-4">
          <h4 class="card-title mb-1">30%</h4>
          <b-card-text class="mb-2">Company Growth</b-card-text>
          <b-progress variant="warning" value="30" max="100"></b-progress>
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->
    <b-row >
      <b-col cols="12" lg="7" md="6">
        <b-card class="mb-4 cardHeight">
          <h4 class="card-title">Sales Summary</h4>
          <SalesSummary />
        </b-card>
      </b-col>
      <b-col cols="12" lg="5" md="6" class="align-items-center">
        <b-card class="mb-4 cardHeight"  >
          <h4 class="card-title">Weather</h4>
          <weather></weather>
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card class="mb-4" no-body>
      <b-card-body>
        <b-link :to="{name: 'Category'}"><h4 class="card-title text-dark">Cene na pijacama</h4></b-link>        
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <SellingProduct />
    </b-card>
   <b-row>
     <b-col cols="12" lg="4" md="4">
        <b-card class="mb-4 cardHeight2"  >
          <h4 class="card-title">Ogrbi sliku</h4>
          <scratch-card></scratch-card>
        </b-card>
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
import SalesSummary from "./dashboard-components/SalesSummary";
//import SalesIncome from "./dashboard-components/SalesIncome";
import SellingProduct from "./dashboard-components/SellingProduct";
//import TopCards from "./dashboard-components/TopCards";
import Weather from '../components/weather/Weather2.vue';
import ScratchCard from '../components/scratch/ScratchCard.vue';

export default {
  name: "Starter",
  data: () => ({}),
  components: {
    SalesSummary,
   // SalesIncome,
    SellingProduct,
   // TopCards,
    Weather,
    ScratchCard
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
</style>