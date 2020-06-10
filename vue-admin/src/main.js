/*
 * @Description:
 * @Autor: 吕殿朝
 * @Date: 2020-06-10 23:08:15
 * @LastEditors: 吕殿朝
 * @LastEditTime: 2020-06-11 00:03:29
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//重置样式
import "./styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
