import axios from "axios";

/* 
配置 axios

主要保持会话

cookies + session

后端 jwt

登录后 后端会返回一个 token
这个token我们需要保存起来 
除了登录接口 每个接口都要带上token

token 放到header里

请求类型：
1. application/json 
2. content-type: application/x-www-from-urlencoded   数据是字符串样子是  a=1&b=2
3. from-data   上传文件

headers: {
    content-type: 'application/json' // 数据类型json
}


*/
axios.defaults.baseURL = "/m1/1742201-0-default/"

//当所有axios发送请求的时候进行拦截
axios.interceptors.request.use(
  function (config) {
    //获取token
    let token = sessionStorage.getItem("token");
    //有没有token,有的话就加在request里面
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    //所有axios的响应进行拦截
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("接口：", response, response.request);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //token失效了
    if (error.response.status == 401) {
      sessionStorage.removeItem("token");
      alert("请重新登录");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axios;
