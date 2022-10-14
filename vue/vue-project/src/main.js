import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import ECharts from "vue-echarts";
import http from "./utils/http";
import store from "./store";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.css";

// 全局注册组件（也可以使用局部注册）
Vue.component("v-chart", ECharts);

Vue.prototype.$http = http;

Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
