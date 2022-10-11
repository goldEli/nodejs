<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="app">
    <my-table></my-table>
  </div>
</template>
<script>
import MyTable from "./components/MyTable.vue";
export default {
  components: {
    MyTable,
  },
};
</script>

<style scoped>
</style>
