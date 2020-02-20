import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
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

let user: any = localStorage.getItem("user");
if (user) {
  //do login
}

const router = new VueRouter({
  routes
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    // router guard
  } else {
    next();
  }
});

router.afterEach(to => {});

export default router;
