# webpack

### webpack what？why？ how？

静态模块打包工具

解决js模块化的能力

模块化的好处：一个js文件就是一个模块：独立 利于复用，避免命名污染，总之利于代码维护

CJS 同步加载（nodejs） require  module.exports
- 缺点不适合浏览器，需要异步
AMD 提前加载
CMD 按需加载 
- 缓存
- 值拷贝


ESM 
- 统一标准
- 很多浏览器已经支持 
- import  export 
- esm 是编译时加载，也就是只有所有import的模块都加载完成，才会开始执行
- 同一个模块如果加载多次，只会执行一次
- 导出的是值引用

#### 模块打包
早期浏览器不支持模块化，js文件通过script引入
- 命名冲突
- 顺序问题
- 不方便维护

webpack 为我们提供了模块化的能力 一个文件就是一个模块 然后再打包成一个js，通过script标签引入

#### 编译兼容

webpack 提供了各种 loader
编译js babel
编译less less-loader

js语法发展很快，很多浏览器不认识，所以需要编译成浏览器认识的
```
const a = 123;
=>
var a = 123;
```
比如less语法 浏览器不认识，就需要编译成 css
```
@color:red;
.a {
    b {
        color: @color;
    }
}
=>
.a .b {
    color: red;
}
```


#### 插件扩展
提供了插件机制，丰富webpack能力

压缩 混淆代码

```
function getMoney() {
    
}
getMoney()
=>
function a(){};a();
```

### webpack未来
webpack 配置极其复杂，不同版本对应不同配置，很多程序员恨之入骨。有些公司甚至有专门的webpack配置工程师

- 模块打包
    - 很多浏览器已经支持模块化，开发时完全不需要打包，开发效率更高（vite）
- 编译兼容
    - 高级语法很多浏览器已经支持
- 插件扩展
    - 很多工具都能做

大哥已垂暮，但是大哥还是大哥，已使用项目太多

未来：vite

### 开始配置webpack

> https://www.webpackjs.com/guides/getting-started/

