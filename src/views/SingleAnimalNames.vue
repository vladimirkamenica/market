<template>
  <div id="single">
    <keep-alive>
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
   <b-row class="mt-3" v-for="(names,i) in animals.names" :key="i">
      <b-col class="d-inline">
         <p style="font-size: 20px" class="d-inline" v-for="(name) in names" :key="name">
             {{name}},
         </p>
      </b-col>
  </b-row>
  </b-container>
  </keep-alive>
  </div>
</template>

<script>
import GlobalComponent from '../class/globalComponents.js';
import animals from '../class/animalsName.js';
export default {
name: 'SingleAnimalNames',
props: ['id'],
data(){
    return{
        description : '',
        animals: animals.animals,
    }
},
components:{
...GlobalComponent
},
created(){
   
    this.description = this.$route.params.description;

    this.animals = this.animals.find(x=> x.description.toLowerCase() == this.description.toLowerCase().split('-').join(' '));
},
methods:{
    formatName(name){
        return name.replace(' ',',');
    }  ,
    saveId(){
        if(this.$route.params.id){
            console.log('ima')
        }
        else{
            console.log('neam')
        }
    },
     sessionId(){
       
      
       this.animals = this.animals.find(x=> x.id == this.id);
                            
    }
},


}
</script>

<style>

</style>