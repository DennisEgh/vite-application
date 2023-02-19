<script setup>
import NavigationBar from "../components/subcomponents/NavigationBar.vue";

import { RouterLink } from "vue-router";


</script>

<template>
  <NavigationBar day-greeting=""></NavigationBar>

  <video autoplay muted loop id="myVideo">
    <source class="video" src="../assets/videoplayback.mp4" type="video/mp4" />
  </video>

  <section id="landing">
    <header>
      <div class="header__container">
        <h1 class="header__greeting">Join The Exploration Today</h1>
        <RouterLink class="nav__link" to="/pages/planets">
          <button class="header__btn">Planets</button>
        </RouterLink>
      </div>
    </header>
  </section>
</template>

<style scoped>
#myVideo,
.video {
  position: absolute;
}

#landing {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
  z-index: 1;
  flex-wrap: wrap;
}
header {
  height: 200px;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 2;
  width: 100%;
  max-width: 480px;
}

.header__greeting {
  color: rgb(255, 255, 255);
  animation: fadeIn 5s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  opacity: 0;
  font-family: monospace;
  font-size: 2em;
  cursor: default;
  font-size: 32px;
  font-weight: bold;
  z-index: 2;
  text-align: center;
}
.header__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header__btn {
  width: 250px;
  background-color: transparent;
  margin-top: 20px;
  color: white;
  border-color: white;
  border: 2px solid white;
  border-radius: 20px;
  height: 40px;
  transition: all 300ms ease;
  font-size: 20px;
  font-weight: 500;
  font-family: monospace;
  cursor: pointer;
  animation: fadeIn2 5s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  opacity: 0;
}
.header__btn:hover {
  background-color: white;
  color: black;
  transform: scale(1.1);
}
.header__btn:active {
  transform: scale(0.9);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
