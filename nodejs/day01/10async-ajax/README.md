# 异步 ajax

前端数据从后端接口来，接口请求需要时间，会造成页面卡住

```
function render(data) {

}

// 获取数据要几秒钟
const data = 请过接口获取数据

render(data)
```

模拟接口请求卡顿
```
// 模拟长时间的运行
for(let i = 0; i< 10000000000; ++i) {
    console.log(i)
}
```

##### 为什么页面会卡住 

执行完所有js代码，页面才开始渲染，所以浏览器提供了异步能力

定时器：setTimeout setInterval p
接口请求：ajax


