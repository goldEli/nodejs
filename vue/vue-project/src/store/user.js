import http from "../utils/http";
import router from "../router";

const user = {
  namespaced: true,
  state: {
    userInfo: {
      id: undefined,
      name: "",
      userId: undefined,
      type: undefined,
    },
    power: [],
  },
  getters: {},
  mutations: {
    changeUserInfo: function (state, value) {
      state.userInfo = value;
    },
    changePower: function (state, value) {
      state.power = value;
    },
  },
  actions: {
    // 异步
    getUserInfo: function (context, params) {
      console.log(context, this.$http);
      // 异步请求后端数据
      http({
        type: "get",
        url: "/login/getuser",
        params,
      }).then((res) => {
        console.log("登录返回的数据", res);
        // const data = res.data
        // 解构
        const { data, power, code, msg, token } = res.data;
        if (code !== 200) {
          this._vm.$message({
            message: "账号密码错误",
            type: "error",
          });
          return;
        }
        context.commit("changeUserInfo", data[0]);
        context.commit("changePower", power);

        // 存入sessionStorage
        window.sessionStorage.setItem("token", token);

        this._vm.$message({
          message: "登录成功",
          type: "success",
          duration: 2000,
        });

        router.push("/home/noticehome");
      });
    },
  },
};

export default user;
