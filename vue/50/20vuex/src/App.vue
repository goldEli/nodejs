
<template>
  <div id="app">
    <h1>hello</h1>
    <my-counter></my-counter>
    <user-info></user-info>
  </div>
</template>

<script >
import MyCounter from "./components/MyCounter.vue";
import UserInfo from "./components/UserInfo.vue";
export default {
  components: {
    MyCounter,
    UserInfo
  }
};
</script>

<style scoped>
</style>
