<template>
  <div id="app">
    <my-header></my-header>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <my-content></my-content>
  </div>
</template>

<script>
import ButtonCounter from "./components/ButtonCounter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyContent from "./components/MyContent.vue";
export default {
  name: "App",
  components: {
    ButtonCounter,
    MyHeader,
    MyContent
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
