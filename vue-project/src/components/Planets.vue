<script setup>
import axios from "axios";
import { ref } from "vue";

const weathersData = ref();

axios.get("https://api.le-systeme-solaire.net/rest/bodies/").then((resp) => {
  weathersData.value = resp.data;
});

console.log(weathersData);


</script>
<template>
  <section id="planets">
   
  </section>
</template>
<style>
#planets {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(5, 0, 98, 1) 100%
  );
}
</style>
