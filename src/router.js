import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import FavoritePage from "@/pages/FavoritePage/FavoritePage.vue";
import PhotoPage from "@/pages/PhotoPage/PhotoPage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritePage,
    props: true,
  },
  {
    path: "/photoPage/:id",
    name: "photoPage",
    component: PhotoPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
