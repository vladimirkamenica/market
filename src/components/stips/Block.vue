<template>
  <div id="block">
      <b-row>
      
 <b-col cols="12" xl="4" lg="6" md="6" class="mt-4"  v-for="(item,i) in items" :key="i">
      <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                   :class="item.class"
                   style="height:400px"
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">{{item.title}}</h5>
                     <b-link :to="{name: 'SingleCategory',params:{category: item.stips_category}}"><h6>pogledaj sve</h6></b-link> 
                      
                  </template>   
                  <b-card-body class="bg-block" >
                    <div >
                   <div class="d-flex align-items-center mt-3" v-for="(product,i) in item.products" :key="i">
                      <b-avatar
                        class="mr-2 text-white "
                        :variant="item.color"
                       
                        size="40px"
                      >  <component :is='product.img'></component>
</b-avatar>
                      <b-link class="text-secondary" :to="{name : 'CurrentTable',params: {product : product.value,category:item.stips_category}}" > <h5>{{product.description}}</h5></b-link>  
                    <hr>
                    </div>
                    
                     
                    </div>           
                  </b-card-body>                     
                  </b-card>
    </b-col>
        
      </b-row>
      <b-row>
          <b-col>
             <celery></celery>

          </b-col>
      </b-row>
  </div>
</template>

<script>
import Pear from './type/Pear.vue';
import Banana from './type/Banana.vue';
import Apple from './type/Apple.vue';
import Pineapple from './type/Pineapple.vue';
import Eggs from './type/Eggs.vue';
import GreenBeans from './type/GreenBeans.vue';
import Beet from './type/Beet.vue';
import Cabbage from './type/Cabbage.vue';
import Celery from './type/Celery.vue';








export default {
name: 'Block',
components:{
    Pear,
    Banana,
    Apple,
    Pineapple,
    Eggs,
    GreenBeans,
    Beet,
    Cabbage,
    Celery
},
data(){
    return{
        items : [
            {
                title : "Cena jaja na pijacama",
                color: 'success',
                class: 'm-0 p-0 img-bg-egs',
                stips_category : 12,
                products : [
                    {
                        description : 'Cena jaja(L) na pijacama',
                        value: "Jaja(L)",
                        avatar: 'L',
                        img: 'eggs',
                        size : "2x"
                    },
                    {
                        description : 'Cena jaja(M) na pijacama',
                        value: "Jaja(M)",
                        avatar: 'M',
                        img: 'eggs',
                        size : "2x"
                    },
                    {
                        description : 'Cena jaja(S) na pijacama',
                        value: "Jaja(S)",
                        avatar: 'S',
                        img: 'eggs',
                        size : "1x"
                    },
                    {
                        description : 'Cena jaja(XL) na pijacama',
                        value: "Jaja(XL)",
                        avatar: 'XL',
                        img: 'eggs',
                        size : "2x"
                    }

                ]
            },
            {
                title : "Cena voća na pijacama",
                color: 'danger',
                class: 'm-0 p-0 img-bg',
                stips_category : 1,
                products : [
                    {
                        description : 'Cena kruške na pijacama',
                        value: "Kruška",
                        avatar: 'kr',
                        img : 'pear'
                    },
                    {
                        description : 'Cena banane na pijacama',
                        value: "Banana",
                        avatar: 'ba',
                        img : 'banana'

                    },
                    {
                        description : 'Cena jabuke na pijacama',
                        value: "Jabuka",
                        avatar: 'ja',
                        img : 'apple'
                    },
                    {
                        description : 'Cena ananasa na pijacama',
                        value: "Ananas",
                        avatar: 'an',
                        img : 'pineapple'

                    }

                ]
            },
            {
                title : "Cena povrća na pijacama",
                color: 'secondary',
                class: 'm-0 p-0 img-bg-veg',
                stips_category : 2,
                products : [
                    {
                        description : 'Cena boranije na pijacama',
                        value: "Boranija",
                        avatar: 'bo',
                        img : 'green-beans'

                    },
                    {
                        description : 'Cena cvekle na pijacama',
                        value: "Cvekla",
                        avatar: 'cv',
                        img : 'beet'

                    },
                    {
                        description : 'Cena kupusa na pijacama',
                        value: "Kupus",
                        avatar: 'ku',
                        img : 'cabbage'

                    },
                    {
                        description : 'Cena celera na pijacama',
                        value: "Celer",
                        avatar: 'ce',
                        img : 'celery'

                    }

                ]
            }
        ]
    }
}
}
</script>

<style>
.bg-block{
    background: rgba(255,255,255,0.8)
   }
   .img-bg{
    background-image: linear-gradient(rgba(223, 223, 223, 0.5), rgba(221, 221, 221, 0.2)), url("/assets/images/fruit.jpg");
    background-size: cover;
    
   }
   .img-bg-veg{
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.2)), url("/assets/images/vegetables.jpg");
    background-size: cover;
    
   }
   .img-bg-cattle{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("/assets/images/cattle.jpg");
    background-size: cover;
    
   }
    .img-bg-cereals{
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url("/assets/images/cereals.jpg");
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