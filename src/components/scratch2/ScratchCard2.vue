<template>
  <div id="scratch-card2" class="text-center">
    <scratch-card :key="renderCount"
                  :cardWidth="cardWidth"
                  :cardHeight="cardHeight"
                  :finishPercent="finishPercent"
                  :imageUrl="require('@/assets/images/greb1.png')"
                  :brushUrl="brushUrl"
                  :forceReveal="forceReveal">
      <a href="https://www.itkursevi.com/" target="_blank"><img class="card-content img-fluid"  width="300" src="@/assets/images/baner11.jpg"></a>
    </scratch-card>
    <button class="d-none" @click="forceReveal = true">Force Reveal!</button>
      
    <button class="btn btn-success mt-2" @click="renderCount++">Ponovi</button>
  </div>
</template>
 
<script>
import ScratchCard from './ScratchCard.vue';
import BRUSH from './brush.png';
 
export default {
  name: 'ScratchCard2',
  components: {
    ScratchCard,
  },
 
  data() {
    return {
      renderCount: 0,
      cardWidth: 500,
      cardHeight: 298,
      finishPercent: 20,
      brushUrl: BRUSH,
      forceReveal: false,
    };
  },
};
</script> 
 
<style scoped>
.card-content {
  color: red;
}
.img-st {
  max-width: 100%;
  height: auto;
}
</style> 