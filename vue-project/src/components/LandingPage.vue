<script setup>
import NavigationBar from "../components/subcomponents/NavigationBar.vue";
import axios from "axios";
import { ref } from "vue";

const weathersData = ref(null);

axios
  .get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stockholm?unitGroup=metric&key=BS8GTQN6HJWE3LQ73JQWKDKZX&contentType=json"
  )
  .then((resp) => {
    weathersData.value = resp.data;
  });

console.log(weathersData);
</script>

<template>
  <NavigationBar day-greeting=""></NavigationBar>

  <video autoplay muted loop id="myVideo">
    <source class="video" src="../assets/videoplayback.mp4" type="video/mp4" />
  </video>

  <section id="landing">
    <header>
      <div class="header__container">
        <h1 class="header__greeting">Join The Exploration Today.</h1>
      </div>
    </header>
  </section>
</template>

<style scoped>
.myVideo,
video {
  position: absolute;
}
#landing {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  height: 200px;
  margin-left: 20px;
  margin-right: 20px;
}
.header__greeting {
  color: black;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  width: 480px;
  font-size: 32px;
  font-weight: bold;
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
