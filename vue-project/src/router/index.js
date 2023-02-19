import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import Planets from "../components/Planets.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/pages/home",
      name: "page 1",
      component: LandingPageView,
    },
    {
      path: "/",
      redirect: "/pages/home",
    },

    {
      path: "/pages/planets",
      name: "Page 2",
      component: Planets,
    },
  ],
});

export default router;
