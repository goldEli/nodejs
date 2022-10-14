# 10test-vue3

This template should help get you started developing with Vue 3 in Vite.

### 生命周期

```
vue2              vue3

beforeCreate
created
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
