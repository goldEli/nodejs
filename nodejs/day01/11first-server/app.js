// require 引入 别人写的 http 对象  用来创建服务器
// http 对象 是nodejs 自带的
const http = require("http");

/**
 * 创建一个http服务器
 * @date 2022-09-14
 * @param {any} req 请求对象 获取用户请求信息
 * @param {any} res 响应对象 返回用户响应信息
 * @returns {any}
 */
const mySever = http.createServer((req, res) => {
  console.log(req.url);
  /* 
        为什么这样代码 在启动服务器是时没有调用 
        而是当我们访问服务器时才调用？

        这个和我们事件绑定很像，当事件发生时才执行此函数 

        这种函数 我们称之为 回调函数
    */
  res.write("hello world");
  res.end();
});

// 绑定端口
mySever.listen(8888, () => {
  console.log("服务器创建成功，请访问http://localhost:8888");
});
