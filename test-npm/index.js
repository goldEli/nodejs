// 我们需要一个创造唯一id的方法，用别人现成的 就需要用到npm包管理器
// 从 uuid npm包中引入v4的方法
import { v4 } from "uuid";

// 当然我们可以自己写
import { createUUID } from "./libs/index.js";

console.log("hello world");
console.log(v4());
console.log("createUUID", createUUID());
