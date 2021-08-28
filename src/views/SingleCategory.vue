<template>
  <div id="single-category">
      <b-container>
          <b-row>
                  <b-col>
                  <b-card
                   header-tag="header"
                   header-bg-variant="light-secondary"
                  >   
                   <template class="bg-dark" #header >
                       <b-row class="align-items-center">
                          <b-col>
                            <h5 class="mb-0 text-dark">Cene voća na pijacama</h5>

                           </b-col>
                         
                       </b-row>
                  </template>   
                  <b-card-body>
                  <div id="my-category"  v-for="(product,i) in items[0].products" :key="i">
                    
                      <b-link class="text-secondary" :to="{name: 'Weeks',params:{product : product.value}}"> 
                          <h5>{{product.description}}</h5>
                          </b-link>  
                    <hr>
                    </div>                 
                  </b-card-body>
                      
                  </b-card>
                  
             </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import range from '../class/range.js';


export default {
    name: "SingleCategory",
    data(){
        return{
            years: range(2010,new Date().getFullYear()),
            category: '',
            select_year : 2021,
            weeks: [],
            items : [
                {
                    category : 1,
                    products : [
                        {
                            value : 'Kruška',
                            description: 'Cene krušaka na pijacama'
                        },
                        {
                            value : 'Banana',
                            description: 'Cene banane na pijacama'
                        },
                        {
                            value : 'Borovnica',
                            description: 'Cene borovnice na pijacama'
                        },
                        {
                            value : 'Breskva',
                            description: 'Cene breskve na pijacama'
                        },
                        {
                            value : 'Grejpfrut ',
                            description: 'Cene grejpfruta  na pijacama'
                        },
                        {
                            value : 'Grožđe ',
                            description: 'Cene grožđa  na pijacama'
                        },
                        {
                            value : 'Jabuka ',
                            description: 'Cene jabuka  na pijacama'
                        },
                        {
                            value : 'Kivi ',
                            description: 'Cene kivija na pijacama'
                        }
                    ]
                }
            ]
        }
    },
    created(){
        this.category = this.$route.params.category;
       
        this.getWeek();
    },
    methods:{
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