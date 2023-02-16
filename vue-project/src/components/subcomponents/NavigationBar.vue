<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
  <div class="navigation">
    <nav>
    
        <div class="nav__logo--container">
            
            <RouterLink  class="nav__link" to="/Home">
                <img 
                class="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png"
                alt=""
                />
            </RouterLink>
        </div>
    </nav>
</div>
<header>
    <div class="header__container"></div>
  </header>
</template>

<style scoped>
.navigation {
  display: flex;
  z-index: 9999;
  position: absolute;
  width: 100%;
  height: 80px;
  padding: 20px;
}
nav {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

}
.nav__link {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
}
.nav__logo--container {
  height: 100px;
}
.nav__logo {
  height: 50px;
  width: 300px;
}

</style>
