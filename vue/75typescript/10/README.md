# typescript

typescript 是 JavaScript 的超集，js 能做的 ts 都能做，ts 能做 js 不一定能做

ts 拥有类型
浏览器不能识别 ts，所以写完 ts 都需要编译成 js

### 全局安装 ts

```
npm install -g typescript
```

### 初始化 ts 的配置文件

```
tsc --init
```

```
{

    "target": "es2016", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
}
```

### 编译
```
tsc

tsc -w 实时编译
```
