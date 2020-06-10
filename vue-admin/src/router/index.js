/*
 * @Description:
 * @Autor: 吕殿朝
 * @Date: 2020-06-10 23:08:15
 * @LastEditors: 吕殿朝
 * @LastEditTime: 2020-06-10 23:51:35
 */

import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
