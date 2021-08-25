<template>
  <div id="category">
      <b-container class="mt-4">
            <b-row>
              <b-col>
                  <b-card
                   header-tag="header"
                   header-bg-variant="secondary"
                  >   
                   <template class="bg-dark" #header >
                      <h5 class="mb-0 text-white">Kategorije</h5>
                  </template>   
                  <b-card-body>
                  <div id="my-category" v-for="category in categories" :key="category.id">
                      <b-link class="text-secondary" :to="{name:'Subcategory',params:{id : category.id}}"> <h5>{{category.name}}</h5></b-link>  
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
export default {
name: "Category",
data(){
  return {
    categories : [],
  }
},
created(){
  this.getCategory();
},
methods:{
  getCategory(){
    this.$axios.get('category')
            .then(res =>{
              this.categories = res.data.categories;
            }).catch(err =>{
              console.log(err);
            })
  }
}
}
</script>

<style>

</style>