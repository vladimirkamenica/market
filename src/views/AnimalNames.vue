<template>
  <div id="animal-names">
      <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                      
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Imena životinja</h5>  
                     <b-link :to="{name: 'AllAnimalNames',params:{description: 'imena-životinja'}}"><h6 class='text-info'>pogledaj sve</h6></b-link> 

                  </template>   
                  <b-card-body class="bg-block" >
                    <div v-for="(animal,i) in animals" :key="i">
                      <div v-if="i < 5">
                   <div class="d-flex align-items-center" >
                      <b-avatar
                        class="mr-2 text-white"
                        :variant="animal.color"                     
                        size="40px"
                      >  <component :is='animal.img'></component>
                      </b-avatar>
                      <b-link class="text-secondary" :to="{name: 'SingleAnimalNames',params:{description: format(animal.description) ,id: animal.id}}"> <h5>{{animal.block}}</h5></b-link>                
                    </div>                  
                         <hr class="mt-1 p-0">
                     
                    </div>  
                    </div>    
                  </b-card-body>                     
        </b-card>
  </div>
</template>

<script>
import GlobalComponent from '../class/globalComponents.js';
import animals from '../class/animalsName.js';

export default {
name: "AnimalNames",
data(){
    return{
        animals: animals.animals

    }
},
created(){
  
},
components:{
...GlobalComponent
},
methods:{
  format(des){
      let text  = des.toLowerCase().split(' ').join('-')
      return text;
  }
}
}
</script>

<style>

</style>