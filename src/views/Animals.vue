<template>
  <div id="animal">
           <b-card               
                   header-tag="header"
                   header-bg-variant="light"
                      
                  >   
                   <template class="bg-black" #header >
                      <h5 class="mb-0 text-dark">Kalendar okota životinja</h5>  
                     <b-link :to="{name: 'AllAnimal',params:{description: 'kalendar-okota-zivotinja'}}"><h6 class='text-info'>pogledaj sve</h6></b-link> 

                  </template>   
                  <b-card-body class="bg-block" >
                    <div v-for="(animal,i) in animals" :key="i">
                      <div v-if="i < 6">
                   <div class="d-flex align-items-center" >
                      <b-avatar
                        class="mr-2 text-white"
                        :variant="animal.color"                     
                        size="40px"
                      >  <component :is='animal.img'></component>
                      </b-avatar>
                      <router-link class="text-secondary" :to="{name: 'AnimalsTime',params:{title: animal.title.replace(/[()]/g,' ').toLowerCase().split(' ').join('-').split('--').join('-') }}"> <h5>{{animal.title}}</h5></router-link>                
                    </div>                  
                         <hr class="mt-1 p-0">
                     
                    </div>  
                    </div>    
                  </b-card-body>                     
        </b-card>
  </div>
</template>

<script>
import animlasItem from '../class/animals.js';
import GlobalComponent from '../class/globalComponents.js';

export default {
name: "Animals",
data(){
    return{
        animals : animlasItem.animals
    }
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