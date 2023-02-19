<script setup>
import { watch } from "vue";

watch(
  () => props.planetsData,
  (value) => {
    console.log(value.bodies);
  }
);

const props = defineProps({
  planetsData: {
    type: Object,
  },
});
</script>
<template>
  <template v-if="planetsData">
    <div v-for="value in planetsData.bodies" class="planetslist">
        <div class="planet__info--container">

            <h1 class="planet__name">{{ value.id }}</h1>
            <p class="planet__para">Body Type: {{ value.bodyType }}</p>
            <p class="planet__para">Gravity: {{ value.gravity }} m/s^2</p>
            <p class="planet__para">Density: {{ value.density }} g/cm³</p>
            <p class="planet__para">Axial Tilt: {{ value.axialTilt }}°</p>

        </div>
    </div>
  </template>

  <h1 v-else class="cards__loading">
    Loading

    <img
      class="cards__loading--spinner"
      src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/loader-icon.png"
      alt=""
    />
  </h1>
</template>
<style>
.planetslist {
  width: 200px;
  height: 300px;
  background-color: rgb(72, 69, 89);
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  
}
.planet__info--container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.planet__name {
  color: aliceblue;
  text-transform: uppercase;
}
.card__skeleton {
  width: 200px;
  height: 300px;
  background-color: rgb(138, 137, 137);
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
}
.cards__loading {
  font-size: 36px;
  text-align: center;
  color: white;
  position: relative;
  top: 300px;
}
.cards__loading--spinner {
  width: 32px;
  height: 32px;
  filter: invert(1);
  position: relative;
  top: 7px;
  animation: rotation 1s infinite linear;
}
.planet__para{
  color: rgb(255, 255, 255);
  position: relative;
  top: 20px;
  margin-bottom: 20px;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
