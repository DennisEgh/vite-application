<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navigation">
    <nav>
      <RouterLink class="nav__link" to="/Pages/Films">Films</RouterLink>
      <RouterLink class="nav__link" to="/Pages/People">People</RouterLink>
      <RouterLink class="nav__link" to="/Pages/Planets">Planets</RouterLink>
      <RouterLink class="nav__link" to="/Pages/Species">Species</RouterLink>
      <RouterLink class="nav__link" to="/Pages/Starships">Starships</RouterLink>
      <RouterLink class="nav__link" to="/Pages/Vehicles">Vehicles</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
  z-index: 9999;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  height: 80px;
  position: absolute;
  
  padding: 20px;
}
.nav__link {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
}
</style>
