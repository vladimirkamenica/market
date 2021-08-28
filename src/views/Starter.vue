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
        <b-link :to="{name: 'Category'}"><h4 class="card-title text-dark">Cene na pijaci</h4></b-link>        
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <SellingProduct />
    </b-card>
  
        <block-market></block-market>
    
   <b-row class="d-none">
      <b-col cols="12" xl="4" lg="6" md="6">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg"
                   style="height:400px"
                  >   
                   <template #header >
                      <h5 class="mb-0" style="color:black">Cene voća na pijaci</h5>
                       <h6>pogledaj sve</h6>
                  </template>   
                  <b-card-body class="bg-block" >
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="danger"
                        text="Kr"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary"  > <h5>Cene kruške na pijaci</h5></b-link>  
                    <hr >
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="danger"
                        text="Ba"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary"  > <h5>Cene banana na pijaci</h5></b-link>  
                    <hr > 
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="danger"
                        text="Ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary"  > <h5>Cene jabuka na pijaci</h5></b-link>  
                    <hr >
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="danger"
                        text="An"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cene ananasa na pijaci</h5></b-link>  
                    <hr >
                    </div>               
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
              <b-col cols="12" xl="4" lg="6" md="6">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg-veg"
                   style="height:400px"
                  >   
                   <template class="bg-dark" #header >
                      <h5 class="mb-0 text-dark">Cene povrća na pijaci</h5>
                      <h6>pogledaj sve</h6>
                  </template>   
                  <b-card-body class="bg-block">
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="secondary"
                        text="Bo"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena boranije na pijaci </h5></b-link>  
                    <hr>
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="secondary"
                        text="cv"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena cvekle na pijaci</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="secondary"
                        text="ku"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena kupusa na pijaci</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="secondary"
                        text="ce"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena celera na pijaci</h5></b-link>  
                    <hr>
                    </div>               
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
     <b-col cols="12" xl="4" lg="6" md="6">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg-cattle"
                  style="height:400px"
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Cene stoke na pijaci</h5>
                      <h6>pogledaj sve</h6>
                      
                  </template>   
                  <b-card-body class="bg-block">
                    <div >
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="primary"
                        text="bi"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena bikova na pijacam</h5></b-link>  
                    <hr>
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="primary"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena  jagnjadi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="primary"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena jaradi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="primary"
                        text="pr"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena prasadi na pijacam</h5></b-link>  
                    <hr>
                    </div>    
                    </div>           
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>

  
     
      <b-col cols="12" xl="4" lg="6" md="6" class="mt-4">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg-egs"
                  style="height:400px"
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Cene jaja na pijaci</h5>
                      <h6>pogledaj sve</h6>
                      
                  </template>   
                  <b-card-body class="bg-block">
                    <div >
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="success"
                        text="bi"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena bikova na pijacam</h5></b-link>  
                    <hr>
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="success"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena  jagnjadi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="success"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena jaradi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="success"
                        text="pr"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena prasadi na pijacam</h5></b-link>  
                    <hr>
                    </div>    
                    </div>           
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
              <b-col cols="12" xl="4" lg="6" md="6" class="mt-4">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg-milk"
                  style="height:400px"
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Cene mleka i mlečnih proizvoda na pijaci</h5>
                      <h6>pogledaj sve</h6>
                      
                  </template>   
                  <b-card-body class="bg-block">
                    <div >
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="warning"
                        text="bi"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena bikova na pijacam</h5></b-link>  
                    <hr>
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="warning"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena  jagnjadi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="warning"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena jaradi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="warning"
                        text="pr"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena prasadi na pijacam</h5></b-link>  
                    <hr>
                    </div>    
                    </div>           
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
              <b-col cols="12" xl="4" lg="6" md="6" sm="12" class="mt-4">
    
                  <b-card
                   header-tag="header"
                   header-bg-variant="light"
                   class="m-0 p-0 img-bg-cereals"
                  style="height:400px"
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Cene žitarica na pijaci</h5>
                      <h6>pogledaj sve</h6>
                      
                  </template>   
                  <b-card-body class="bg-block">
                    <div >
                   <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="info"
                        text="bi"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena bikova na pijacam</h5></b-link>  
                    <hr>
                    </div>
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="info"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena  jagnjadi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="info"
                        text="ja"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena jaradi na pijacam</h5></b-link>  
                    <hr>
                    </div>   
                     <div class="d-flex align-items-center mt-3">
                      <b-avatar
                        class="mr-2 text-white"
                        variant="info"
                        text="pr"
                        size="40px"
                      ></b-avatar>
                      <b-link class="text-secondary" > <h5>Cena prasadi na pijacam</h5></b-link>  
                    <hr>
                    </div>    
                    </div>           
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
   </b-row>
   <b-row class="mt-4">
 <b-col cols="12" lg="4" md="4">
        <b-card class="mb-4 cardHeight2"  >
          <h4 class="card-title">Ogrebi sliku</h4>
          <hr>
          <scratch-card></scratch-card>
          <hr>
        </b-card>
     </b-col>
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
import SalesSummary from "./dashboard-components/SalesSummary";
//import SalesIncome from "./dashboard-components/SalesIncome";
import SellingProduct from "./dashboard-components/SellingProduct";
//import TopCards from "./dashboard-components/TopCards";
import Weather from '../components/weather/Weather2.vue';
import BlockMarket from '../components/stips/Block.vue';

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
    ScratchCard,
    BlockMarket

   
  


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