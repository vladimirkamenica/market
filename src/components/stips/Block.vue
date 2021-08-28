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
                        :text="product.avatar"
                        size="40px"
                      ></b-avatar>
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
<pear></pear>

          </b-col>
      </b-row>
  </div>
</template>

<script>
import Pear from './type/Pear.vue';

export default {
name: 'Block',
components:{
    Pear
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
                        avatar: 'L'
                    },
                    {
                        description : 'Cena jaja(M) na pijacama',
                        value: "Jaja(M)",
                        avatar: 'M'
                    },
                    {
                        description : 'Cena jaja(S) na pijacama',
                        value: "Jaja(S)",
                        avatar: 'S'
                    },
                    {
                        description : 'Cena jaja(XL) na pijacama',
                        value: "Jaja(XL)",
                        avatar: 'XL'
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
                        avatar: 'kr'
                    },
                    {
                        description : 'Cena banane na pijacama',
                        value: "Banana",
                        avatar: 'ba'
                    },
                    {
                        description : 'Cena jabuke na pijacama',
                        value: "Jabuka",
                        avatar: 'ja'
                    },
                    {
                        description : 'Cena ananasa na pijacama',
                        value: "Ananas",
                        avatar: 'an'
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
                        avatar: 'bo'
                    },
                    {
                        description : 'Cena cvekle na pijacama',
                        value: "Cvekla",
                        avatar: 'cv'
                    },
                    {
                        description : 'Cena kupusa na pijacama',
                        value: "Kupus",
                        avatar: 'ku'
                    },
                    {
                        description : 'Cena celera na pijacama',
                        value: "Celer",
                        avatar: 'ce'
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