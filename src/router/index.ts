/* eslint-disable no-var */
import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/homepage",
    },
    {
      path: "/homepage",
      name: "home",
      component: () => import("../views/HomePage.vue"),
      redirect: "/importEHR",
      children: [
        {
          path: "/importEHR",
          name: "importEHR",
          component: () => import("../views/ImportEHR.vue"),
        },
        {
          path: "/searchEHR",
          name: "searchEHR",
          component: () => import("../views/DataBase.vue"),
        },
      ],
    },
  ],
});

export default router;
