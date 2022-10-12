import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect:{ name: 'login' }
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    // redirect:'/home/noticehome',
    children: [
      {
        path: "noticehome",
        name: "noticehome",
        component: () => import("../views/NoticeHome.vue"),
      },
      {
        path: "notice",
        component: () => import("../views/Notice.vue"),
      },
      {
        path: "student",
        component: () => import("../views/Student.vue"),
      },
      {
        path: "dorm",
        component: () => import("../views/Dorm.vue"),
      },
      {
        path: "admin",
        component: () => import("../views/Admin.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
