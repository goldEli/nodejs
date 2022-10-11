// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ApiView from "../views/ApiView.vue";
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
      // component: ApiView,
      /* 
      懒加载 代码分割，当该路由被加载时再请求js文件
      */
      component: () =>
        import(/* webpackChunkName: "ApiView" */ "../views/ApiView.vue"),
    },
    {
      path: "/user",
      name: "user",
      /* 
      懒加载 代码分割，当该路由被加载时再请求js文件
      */
      component: () =>
        import(/* webpackChunkName: "UserView" */ "../views/UserView.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          /* 
      懒加载 代码分割，当该路由被加载时再请求js文件
      */
          component: () =>
            import(
              /* webpackChunkName: "UserProfileView" */ "../views/UserProfileView.vue"
            ),
        },
        {
          path: "setting",
          name: "setting",
          /* 
      懒加载 代码分割，当该路由被加载时再请求js文件
      */
          component: () =>
            import(
              /* webpackChunkName: "UserSettingView" */ "../views/UserSettingView.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
