<template>
  <div id="scratch-card">
      <b-row  v-if="display">
          <b-col>
      <vue-scratchable
   
      v-slot="{ init }"
      :brushOptions="brush"
      :hideOptions="hide"
      getPercentageCleared
      @percentage-update="updatePoints"
    >
      <div class="img-container">
    
        <img
          class="img-fluid"
          height="400"
          :src="require('@/assets/images/big/img2.jpg')"
          @load="init()"
        >
           <p v-if="display_code" class="centered">{{code}}</p>
      </div>

    </vue-scratchable>
       <p >You scratched {{ percentage }}% free.</p>

          </b-col>
      </b-row >
    <b-row class="justify-content-center" v-if="!display">
        <b-col class="text-center">
      
     <div class="img-container">
         <img
         class="img-fluid"
         height="400"
          :src="require('@/assets/images/big/img2.jpg')">
          <p v-if="display_code" class="centered">{{code}}</p>
     </div>
    
                
  <b-button class="btn bg-info mt-2 text-center " @click="reset">Refresh</b-button>
        </b-col>
    </b-row>
    
    

  </div>
</template>

<script>
import VueScratchable from './vue-scratchable.vue';
import paperPattern from '@/assets/natural-paper-texture.jpg';
export default {
name: 'ScratchCard',
 components: {
    VueScratchable,
  },
  computed: {
    subline() {
      return this.percentage < 100
        ? `🎉 There is still ${100 - this.percentage}% left for me to be free... 🎉`
        : '💚 Thank you for scratching me free! 💚';
    },
  },
  created(){
  this.makeid(10);
  },
  data() {
    return {
      percentage: 0,
      display : true,
      display_code : false,
      code : '',
      hide: {
        type: 'pattern',
        src: paperPattern,
        repeat: 'repeat',
      },
      brush: {
        size: 60,
        shape: 'round',
      },
    };
  },
  methods: {
    updatePoints(percentage) {
      this.percentage = percentage;
      if(this.percentage >= 45){
           this.display = false;           
      } 
      if(this.percentage >= 30){
           this.display_code = true;           
      } 
    },
    reset(){
        this.display = true;
        this.display_code = false;   
        this.percentage = 0;
        this.code = '';
        setTimeout(()=>{
            this.makeid(10)
        },1000)
        
    },
     makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   this.code = result;
}

  },
}
</script>

<style scoped>
#app {
  font-family: 'Open Sans', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
}
.code{

  
   
    color: #000000;
    font-size: 30px;
}
.vue-scratchable-wrapper {
  background-color: white;
}

h3 {
  color: #2c3e50;
  text-align: center;
}

a {
  color: #2196f3;
}
.img-container {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  font-size: 30px;
}
</style>