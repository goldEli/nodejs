// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApiView from "../views/ApiView.vue";
import GuideView from "../views/GuideView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  // hash  history
  // hash 模式会与我们的 a标签内部跳转冲突，所以采用 history
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/guide",
      name: "guide",
      component: GuideView,
    },
    {
      path: "/api",
      name: "api",
      component: ApiView,
    },
  ],
});

export default router;
