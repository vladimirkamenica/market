<template>
  <div id="single-category">
      <b-container class="mt-4">
          <b-row>
                  <b-col>
                  <b-card
                   header-tag="header"
                   header-bg-variant="light-secondary"
                  >   
                   <template class="bg-dark" #header >
                       <b-row class="align-items-center">
                          <b-col>
                            <h5 class="mb-0 text-dark">{{title}}</h5>

                           </b-col>
                         
                       </b-row>
                  </template>   
                  <b-card-body >
                  <div id="my-category" class="align-items-center"   v-for="(product,i) in items.products" :key="i">
                      <div class="mt-3 d-flex align-items-center">
                           <b-avatar
                      :variant="product.color"
                      class="mr-3 m-0 p-0"
                      >
                          <component :is="product.img"></component>
                      </b-avatar>
                      <b-link class="text-secondary" :to="{name: 'Weeks',params:{product : product.value,category : product.stips_category,description: product.description,source: product.stips_source}}"> 
                          <h5>{{product.description}}</h5>
                      </b-link>  

                      </div>
                     
                    <hr>
                    </div>                 
                  </b-card-body>
                      <stips-site></stips-site>
                  </b-card>
                  
             </b-col>
          </b-row>
          <b-row>
              <b-col>
              
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import GlobalComponent from '../class/globalComponents.js';
import Items from '../class/items.js';
import range from '../class/range.js';








export default {
    name: "SingleCategory",
    components:{
   ...GlobalComponent
    },
    data(){
        return{
            years: range(2010,new Date().getFullYear()),
            category: '',
            subcategory: '',
            select_year : 2021,
            title : '',
            weeks: [],
            items : Items.items, 
        }
    },
    created(){
        this.category = this.$route.params.category;
        this.subcategory = this.$route.params.subcategory;
        this.title = this.$route.params.title;
        this.items = this.items.find(x=> x.stips_subcategory == this.subcategory);
        this.getWeek();
    },
    methods:{
        checkItemsLength(){
            return this.items.length > 0 ? true : false;
        },
        getWeek(){
            this.$http.get(`https://www.stips.minpolj.gov.rs/stips/ajax/nedelje_za_godinu/${this.select_year}`)
                   .then(res =>{
                       this.weeks = res.data.result.nedelje;    
                                     
                   })
        },
        
    }

}
</script>

<style>

</style>