<template>
  <div id="all-animal">
    <b-container>
      <b-row class="justify-content-center"> 
        <b-col cols="8">
           <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                      
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Kalendar okota životinja</h5>  
                   

                  </template>   
                  <b-card-body class="bg-block" >
                    <div v-for="(animal,i) in animals" :key="i">
                      
                   <div class="d-flex align-items-center" >
                      <b-avatar
                        class="mr-2 text-white"
                        :variant="animal.color"                     
                        size="40px"
                      >  <component :is='animal.img'></component>
                      </b-avatar>
                      <router-link class="text-secondary" :to="{name: 'AnimalsTime',params:{titleAnimal: animal.title.replace(/[()]/g,' ').toLowerCase().split(' ').join('-').split('--').join('-'),animal: animal.animal.toLowerCase() }}"> <h5>{{animal.title}}</h5></router-link>                
                    </div>                  
                         <hr class="mt-1 p-0">
                     
                    </div>  
                   
                  </b-card-body>                     
        </b-card>

        </b-col>
      </b-row>
    </b-container>
              
  </div>
</template>

<script>
import animlasItem from '../class/animals.js';
import GlobalComponent from '../class/globalComponents.js';
export default {
name: 'AllAnimal',
data(){
    return{
  animals : animlasItem.animals
    }
},
components:{
...GlobalComponent
},
}
</script>

<style>

</style>