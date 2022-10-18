# 10test-vue3

This template should help get you started developing with Vue 3 in Vite.

### 生命周期

```
vue2              vue3

beforeCreate     setup
created          setup
beforeMount      onBeforeMount
mounted          onMounted
beforeUpdate     onBeforeUpdate
updated          onUpdate
beforeDestroy    onBeforeUnmount
destroyed        onUnmounted
```

### 多个根节点

vue2 一个组件只有一个根节点
vue3 支持多个根节点

### Composition API

Vue2 Options API 面向对象

```
export default {
    data: function () {
        return {}
    },
    computed: {}
}
```

Vue3 组合式 API
相同逻辑写到一起 增加复用性 和代码维护性

### Vue3 和 Vue2 的区别

- 数据视图绑定的原理发生了改变
    - Object.defineProperty vs Proxy
    - defineProperty 只能监听某个属性，不能对整个对象进行监听
    - Proxy 可以监听数组，监听数据内变化
- 支持 fragments
    - 组件支持多个节点
- Composition API
    - Options API VS Composition API
    - 相同逻辑可以写到一起 方便逻辑的封装 复用
- 生命周期不同
- 原生支持typescript


