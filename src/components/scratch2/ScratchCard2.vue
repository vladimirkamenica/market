<template>
  <div id="scratch-card2" class="text-center">
    <scratch-card :key="renderCount"
                  :cardWidth="cardWidth"
                  :cardHeight="cardHeight"
                  :finishPercent="finishPercent"
                  imageUrl="https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.6435-9/33703552_10155897826812886_1150429057775566848_n.png?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=Fp4Ncj0xS1wAX8t6cH8&_nc_ht=scontent.fbeg4-1.fna&oh=649973902e806280b4a93df559f9285c&oe=615C76A6"
                  :brushUrl="brushUrl"
                  :forceReveal="forceReveal">
      <img class="card-content img-fluid" height="300" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg">
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
      cardHeight: 360,
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
</style> 