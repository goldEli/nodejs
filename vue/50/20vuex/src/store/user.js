import axios from "axios";

const user = {
  state: {
    username: "张三",
  },
  getters: {},
  mutations: {
    // 同步函数
    changeUsername: function (state, value) {
      state.username = value;
    },
  },
  actions: {
    // 异步
    getUserInfo: function (context, value) {
      // 异步请求后端数据
      axios
        .get("/src/assets/data.json", { data: { id: value } })
        .then((data) => {
          console.log(data);
          // commit 调用 mutations 方法
          context.commit("changeUsername", data.data.data.username);
        });
    },
  },
};

export default user;
