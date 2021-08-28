<template>
  <div id="subcategory">
 <b-container class="mt-4">
            <b-row>
              <b-col>
                  <b-card
                  header-tag="header"
                   header-bg-variant="secondary"
                  >   
                   <template class="bg-dark" #header >
                      <h5 class="mb-0 text-white">Potkategorije</h5>
                  </template>   
                  <b-card-body>
                  <div id="my-subcategory" v-for="subcategory in subcategories" :key="subcategory.id">
                      <b-link class="text-secondary"> <h5>{{subcategory.name}}</h5></b-link>
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
name: 'Subcategory',
data(){
    return {
        subcategories: [],
        category_id : ''
    }
},
created(){
this.category_id = this.$route.params.id;
this.getSubcategory(this.category_id);

},
methods:{
    getSubcategory(id){
        this.$axios.get(`subcategoryByCategory?category_id=${id}`)
                .then(res =>{
                    this.subcategories = res.data.subcategories;
                }).catch(err => {
                    console.log(err);
                })
    }
}
}
</script>

<style>

</style>