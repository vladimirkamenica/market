<template>
  <div id="block">
      <b-row>
      
 <b-col cols="12" xl="4" lg="6" md="6" class="mt-4"  v-for="(item,i) in items" :key="i">
      <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                   :class="item.class"
                  
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">{{item.title}}</h5>
                     <b-link :to="{name: 'SingleCategory',params:{category: item.stips_category,subcategory:item.stips_subcategory,title: item.title}}"><h6 class='text-info'>pogledaj sve</h6></b-link> 
                      
                  </template>   
                  <b-card-body class="bg-block" >
                    <div v-for="(product,i) in item.products" :key="i">
                      <div v-if="i < 6">
                   <div class="d-flex align-items-center" >
                      <b-avatar
                        class="mr-2 text-white "
                        :variant="product.color"                     
                        size="40px"
                      >  <component :is='product.img'></component>
                      </b-avatar>
                      <b-link class="text-secondary" :to="{name: 'Weeks',params:{product : product.value,category : product.stips_category,description: product.description,source: product.stips_source}}"> <h5>{{product.description}}</h5></b-link>                
                    </div>                  
                         <hr class="mt-1 p-0">
                    </div>     
                    </div>      
                  </b-card-body>                     
        </b-card>
    </b-col>
        
      </b-row>
      <b-row>
          <b-col>
    

          </b-col>
      </b-row>
  </div>
</template>

<script>
import GlobalComponent from '../../class/globalComponents.js';
import Items from '../../class/items.js';

export default {
name: 'Block',
components:{
  ...GlobalComponent
   
},
data(){
    return{
        items : Items.items, 
          }
     },
     methods:{
       filterProductsCount(products){
         return products.splice(0,9);
       }
     }
}
</script>

<style >
.bg-block{
    background: rgba(255,255,255,0.8)
   }
   .img-bg{
    background-image: linear-gradient(rgba(18, 109, 37, 1), rgba(24, 97, 1, 0.2)), url("/assets/images/fruit.jpg");
    background-size: cover;
    
   }
   .fruit-home{
    background-image: linear-gradient(rgba(223, 223, 223, 0.2), rgba(221, 221, 221, 0.2)), url("/assets/images/home.jpg");
    background-size: cover;
    
   }
   .img-bg-veg{
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255,255,255,0.2)), url("/assets/images/vegetables.jpg");
    background-size: cover;
    
   }
   .img-bg-cattle{
    background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.2)), url("/assets/images/cattle.jpg");
    background-size: cover;
    
   }
    .img-bg-cereals{
    background-image: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url("/assets/images/cereals.jpg");
    background-size: cover;
    
   }
    .img-bg-egs{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("/assets/images/egs.jpg");
    background-size: cover;
    
   }
     .img-bg-milk{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("/assets/images/cheese.jpg");
    background-size: cover;
   }
</style>