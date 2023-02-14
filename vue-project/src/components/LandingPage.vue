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
  

  <NavigationBar></NavigationBar>
  <section id="landing">
    <h1>{{ $route.params.id }}</h1>
  </section>
</template>

<style scoped>
#landing {
  height: 100vh;
  width: 100vw;
}
</style>
