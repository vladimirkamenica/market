<template>
  <footer class="p-4 text-center">
         <p v-html="text"></p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      text :  'Sve cene na sajtu su postavljene od strane oglašivača. </br>Pijace.com ne garantuje da su sve informacije o proizvodima potpuno tačne i bez grešaka.</br>Copyright © 2016 - 2021 Pijace.com Sva prava su zadržana.',
    }
  }
};
</script>

<style>
</style>