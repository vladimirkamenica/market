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
                     
                       <router-link class="text-secondary" :to="{name: 'SingleAnimalNames', params:{description: format(animal.description), name: 'name', id: animal.id}}"><h5>{{animal.description}}</h5></router-link>
                         
                  
                                  
          
                     
                    </div>                  
                         <hr class="mt-1 p-0">
                     
                    </div>  
                  
                  </b-card-body>                     
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
import animals from '../class/animalsName.js';
export default {
name: "AllAnimalNames",
data(){
    return{
        animals: animals.animals

    }
},
components:{
...GlobalComponent,

},
methods:{
  format(des){
      let text  = des.toLowerCase().split(' ').join('-')
      this.$session.set('id',11);
      return text;
  },
  async set(animal){
     let data = await this.$http.post("http://localhost:8000/api/session-set",{id: animal.id});
     console.log(data);
  
     this.$router.push({name: 'SingleAnimalNames', params:{description: this.format(animal.description), id: animal.id}})     
  }
}
}
</script>

<style>

</style>