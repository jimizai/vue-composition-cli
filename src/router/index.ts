import Vue from "vue";
import VueRouter from "vue-router";

import appsRouter from "./modules/apps";

Vue.use(VueRouter);

const routes = [
  appsRouter,
  {
    path: "/",
    redirect: "/app"
  },
  {
    path: "/login",
    component: () => import("@/pages/Login"),
    hidden: true
  },
  {
    path: "/*",
    component: () => import("@/pages/NotFound")
  }
];

const router = new VueRouter({
  routes
});

export default router;
