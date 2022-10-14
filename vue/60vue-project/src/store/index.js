import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

/* 
    大型项目才用的到
    1. 数据全局管理
        state getters mutations
    2. 分模块
*/

const store = new Vuex.Store({
  state: {
  },
  getters: {
    
  },
  mutations: {
    
  },
  modules: {
    user,
  },
});

export default store;
