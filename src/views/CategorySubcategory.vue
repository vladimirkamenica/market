<template>
  <div id="category-subcategory" >
    <b-container class="mt-4">   
        <b-row class="justify-content-center">
            <b-col cols="5">
                <b-row>
                    <b-col>
                        <b-form-group label="Enter category" label-for="category">
                            <b-form-input type="text" id="category" v-model="category.name" class="bg-white"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                  <b-row class="justify-content-center mt-2">
                       <b-col cols="6" class="text-center">
                           <b-button class="btn" @click="newCategory">Add</b-button>
                      </b-col>
                  </b-row>
                <b-row class="mt-4">
                    <b-col>
                      <table class="table">
                        <thead class="bg-light">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                           </tr>
                        </thead>
                    <tbody>
                         <tr v-for="(category,i) in categories" :key="category.id">
                                   <th scope="row">{{i+1}}</th>
                              <td>
                                  <input type="text" class="form-control" v-model="category.name">
                             </td>
                             <td>
                                  <button class="btn btn-success" @click="editCategory(category)"><font-awesome-icon :icon="['fas', 'pen']" /></button>
                            </td>
                             <td>
                               <button class="btn btn-danger" @click="delCategory(category)"><font-awesome-icon :icon="['fas', 'times']" /></button>
                            </td>
                         </tr>
                      </tbody>
                 </table>
                    </b-col>
                </b-row>
            </b-col>
                <b-col cols="7"> 
                    <b-row>
                        <b-col>
                             <b-form-group label="Enter subcategory" label-for="subcategory">
                               <b-form-input type="text" id="subcategory" v-model="subcategory.name" class="bg-white"></b-form-input>
                             </b-form-group>                 
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                             <b-form-group label="Select category" label-for="category">
                              <select name="category" id="category" class="form-control bg-white" v-model="subcategory.category_id">
                                 <option :value="category.id" v-for="category in categories" :key="category.id">{{category.name}}</option>
                             </select>
                             </b-form-group> 
                        </b-col>
                    </b-row>
                     <b-row class="justify-content-center mt-2">
                       <b-col class="text-center">
                           <b-button class="btn" @click="newSubcategory">Add</b-button>
                      </b-col>
                  </b-row>
                    <b-row class="mt-4">
                        <b-col>
                   <table class="table">
                    <thead class="bg-light">
                         <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Category name</th>
                           <th scope="col"></th>
                           <th scope="col"></th>
                         </tr>
                    </thead>
                 <tbody ref="bodySubcategory">
                     <tr v-for="(subcategory,i) in subcategories" :key="subcategory.id" :ref="subcategory.id">
                       <th scope="row">{{i+1}}</th>
                     <td>
                         <input type="text" class="form-control" v-model="subcategory.name">
                    </td>
                     <td>
                        <select name="category" id="category" class="form-control" v-model="subcategory.category_id">
                          <option :value="category.id" :selected="category.id == subcategory.category_id ? true : false" v-for="category in categories" :key="category.id">{{category.name}}</option>
                        </select>  
                    </td>

                     <td>
                       <button class="btn btn-success" @click="editSubcategory(subcategory)"><font-awesome-icon :icon="['fas', 'pen']" /></button>
                    </td>
                     <td>
                       <button class="btn btn-danger" @click="delSubcategory(subcategory)"><font-awesome-icon :icon="['fas', 'times']" /></button>
                    </td>
                    </tr>   
                </tbody>
           </table>
                        </b-col>
                    </b-row>
                 
            </b-col>
        </b-row>
    
    </b-container>      
  </div>
</template>

<script>
export default {
name: "CategorySubcategory",
data(){
    return{
 category : {
         name : ''
     },
     categories : [],
      subcategories : [],
         subcategory : {
             name: '',
             category_id : ''
         },
    
    }
},
mounted(){
this.getCategories();
this.getSubcategories();
this.test();
},
created(){
this.test();

},
methods:{
    getCategories(){
        this.$axios.get('category')
                   .then(res =>{
                      this.categories = res.data.categories;
                   })
    },
     getSubcategories(){
     this.$axios.get('subcategory')
                   .then(res =>{
                      this.subcategories = res.data.subcategories;
                   })
    },
    newCategory(){
        if(this.category.name.trim() != ''){
             this.$axios.post('category',this.category)
                   .then(res =>{
                     this.categories = res.data.categories;
                      this.category.name = '';
                   })
        }
        
    },
     newSubcategory(){
         if(this.subcategory.name.trim() != ''){
         this.$axios.post('subcategory',this.subcategory)
                  .then(res =>{
                      this.subcategories = res.data.subcategories;
                      this.subcategory.name = '';                 
                    })
         }
    },
    editCategory(category){
       this.$axios.put(`category/${category.id}`,category)
                 .then(res =>{
                     this.categories = res.data.categories;
                 }).catch(error =>{
                     console.log(error);
                 })
    },
     editSubcategory(subcategory){
        this.$axios.put(`subcategory/${subcategory.id}`,subcategory)
                 .then(res =>{               
                     this.subcategories = res.data.subcategories;
                 }).catch(error =>{
                     console.log(error);
                 })
    },
    delCategory(category){
         this.$axios.delete(`category/${category.id}`)
                 .then(res =>{               
                         this.categories = res.data.categories;
                 }).catch(error =>{
                     console.log(error.response.data);
                 })
    },
    delSubcategory(subcategory){
         this.$axios.delete(`subcategory/${subcategory.id}`)
                 .then(res =>{               
                         this.subcategories = res.data.subcategories;
                 }).catch(error =>{
                     console.log(error);
                 })
    },
    test(){
        
        console.log(this.categories[0] + 'sadasd')
    }

}
}
</script>

<style>

</style>