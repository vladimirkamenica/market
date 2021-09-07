<template>
  <div id="single">
      <b-container class="bg-white " style="min-height: 100vh">
           <b-row class="text-left mt-4">
      <b-col>
          <h2>{{animals.description}}</h2>
      </b-col>
          </b-row>
  <b-row class="mt-3">
      <b-col>
          <p style="font-size: 20px ;" v-html="animals.title"></p>
      </b-col>
  </b-row>
   <b-row class="mt-3" v-for="(names) in animals.names" :key="names">
      <b-col class="d-inline">
         <p style="font-size: 20px" class="d-inline" v-for="(name) in names" :key="name">
             {{name}},
         </p>
      </b-col>
  </b-row>
  </b-container>
  </div>
</template>

<script>
import GlobalComponent from '../class/globalComponents.js';
import animals from '../class/animalsName.js';
export default {
name: 'SingleAnimalNames',
data(){
    return{
        animals: animals.animals,
        id: 0,

    }
},
components:{
...GlobalComponent
},
created(){
    this.id = this.$route.params.id;
    this.animals = this.animals.find(x=> x.id == this.id);
},
methods:{
    formatName(name){
        return name.replace(' ',',');
    }
}
}
</script>

<style>

</style>