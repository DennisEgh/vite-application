<script setup>
import axios from "axios";
import { ref } from "vue";
import planetscard from "./subcomponents/PlanetCards.vue";
import NavigationBar from "../components/subcomponents/NavigationBar.vue";

const planetsData = ref(null);

axios.get("https://api.le-systeme-solaire.net/rest/bodies/").then((resp) => {
  planetsData.value = resp.data;
});


console.log(planetsData);
</script>
<template>
  <section id="planets">
    <NavigationBar></NavigationBar>
    <div class="search__container">
      <input
        v-model="inputValue"
        class="search__bar"
        type="text"
        placeholder="Search.."
      />
    </div>
    <div class="card__container">
      <planetscard :planetsData="planetsData"></planetscard>
    </div>
  </section>
</template>
<style>
input:focus {
  outline: none;
}
#planets {
  height: 100vh;
  width: 100vw;
  background: #242424;
  overflow-y: scroll;
  overflow-x: hidden;
}
.card__container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 300px;
}
.search__container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
}
.search__bar {
  width: 400px;
  height: 30px;
  border-radius: 20px;
  padding: 20px;
}
</style>
