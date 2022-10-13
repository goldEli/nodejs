import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import ECharts from "vue-echarts";
import request from "./utils/request";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.css";

// 全局注册组件（也可以使用局部注册）
Vue.component("v-chart", ECharts);

Vue.prototype.$axios = request;

Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
