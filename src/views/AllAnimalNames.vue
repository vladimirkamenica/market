<template>
  <div id="all">
      <b-container>
          <b-row>
              <b-col>
 <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                      
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Imena životinja</h5>  
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
                      <b-link class="text-secondary" :to="{name: 'SingleAnimalNames',params:{id: animal.id}}"> <h5>{{animal.description}}</h5></b-link>                
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
import GlobalComponent from '../class/globalComponents.js';
import animals from '../class/animalsName.js';
export default {
name: "AllAnimalNames",
data(){
    return{
        animals: animals.animals

    }
},
components:{
...GlobalComponent
}
}
</script>

<style>

</style>