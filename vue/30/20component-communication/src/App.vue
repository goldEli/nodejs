<template>
  <div id="app">
    <my-header></my-header>
    <my-content>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </my-content>
    <test-ref></test-ref>
    <my-tabs></my-tabs>
  </div>
</template>

<script>
import ButtonCounter from "./components/ButtonCounter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyContent from "./components/MyContent.vue";
import TestRef from "./components/TestRef.vue";
import MyTabs from "./components/MyTabs.vue";
export default {
  name: "App",
  components: {
    ButtonCounter,
    MyHeader,
    MyContent,
    TestRef,
    MyTabs
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
