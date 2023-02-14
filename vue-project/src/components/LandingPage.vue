<script setup>
import NavigationBar from "../components/subcomponents/NavigationBar.vue";
import axios from "axios";
import { ref } from 'vue'

const planetsData = ref(null)








    axios.get("https://swapi.tech/api/planets/").then((resp) => {
        planetsData.value = resp.data;
    });


console.log(planetsData)
</script>

<template>
  

  <NavigationBar v-if="planetsData"></NavigationBar>
  <h1 v-else >{{ $route.params.id }}</h1>
  <section id="landing">
  </section>
</template>

<style scoped>
#landing {
  height: 100vh;
  width: 100vw;
}
</style>
