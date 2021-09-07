<template>
  <div id="table">
      <b-table striped hover :stacked='stacked' outlined :style="{height: height + 'px'}" :items="items_table" :fields="table_fields" class="bg-white" thead-class="greenColor">
            <template v-for="field in table_fields"    v-slot:[`cell(${field.key})`]="{item}">
                     <div :key="field.key" v-if="true">
                       <div  class="d-flex align-items-center" :key="field.key" v-if="field.key == 'Proizvod'">
                        <b-avatar class="mr-2" :variant="findIcon(item[field.key]).color" ><components  :is="findIcon(item[field.key]).img" ></components> </b-avatar>
                         {{formatFieldsTabel(field.key,item[field.key]) }}
                       </div> 
                       <div :key="field.key" v-else>{{formatFieldsTabel(field.key,item[field.key]) }}</div>
                     
                   </div>
                       
                       
             </template>
            

      </b-table>
  </div>
</template>

<script>
import FindIcon from '../../class/findProductsIcon.js'
import GlobalComponent from '../../class/globalComponents.js'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'



export default {
name: 'Table',
components:{
...GlobalComponent,
PulseLoader
},
data(){
    return{
        h : 700+'px',
        display : false
    }
},
props:{
    table_fields:{
        type: Array,
        require: true,
    },
    items_table:{
        type: Array,
        require: true,
    },
    height:{
        type: Number,
        require: true
    },
    stacked:{
     
       type: String,
    }

},
methods:{
     findIcon(data){     
        let name  = data.split(' ')[0];
        return FindIcon.find(name);
    },
    formatFieldsTabel(title,val){  
        if(title == "Proizvod")return val.replace('v:srednja p:standardno','');
        return val.replace('.00',' din');
    }
}
}
</script>

<style>
.greenColor {
    background-color: #03bd6f !important;
    color:white;
}
</style>