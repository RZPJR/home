import Vue from "vue";
import VueRouter from "vue-router";
// import Index from "../views/Index.vue";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [{ path: "/Home", component: Home }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
