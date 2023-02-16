<script setup>
import NavigationBar from "../components/subcomponents/NavigationBar.vue";
import axios from "axios";
import { ref } from "vue";

const planetsData = ref(null);

axios.get("https://swapi.tech/api/planets/").then((resp) => {
  planetsData.value = resp.data;
});

console.log(planetsData);
</script>

<template>
  <NavigationBar></NavigationBar>

  <section id="landing">
    <video autoplay muted loop id="myVideo">
      <source
        class="video"
        src="../assets/videoplayback.mp4"
        type="video/mp4"
      />
    </video>
  </section>
</template>

<style scoped>
#landing {
  height: 100vh;
  width: 100vw;
}

</style>
