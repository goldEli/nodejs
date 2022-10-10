<template>
  <span>hello {{name}}</span>
</template>
<script>
// 让 lily 变成动态的
// 名字由其他组件传给自己
// 父组件 传给自己
export default {
  props: {
    // name: String
    // 默认值
    name: {
      type: String,
      default: "xxx"
    }
  }
};
</script>
<style scoped>
span {
  padding: 0 8px;
}
</style>