<template>
  <div class="box">
    <ul>
      <li v-for="item in list">
        <input v-model="item.complete" type="checkbox" />
        <span>item.value</span>
        <button>delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const list = reactive([
  { id: 1, value: "123", complete: true },
  { id: 2, value: "111", complete: false },
]);
</script>

<style scoped lang="less">
.box {
  ul > li {
    padding: 8px 0;
    height: 20px;
    cursor: pointer;
  }
  ul li button {
    display: none;
    cursor: pointer;
  }
  ul li:hover button {
    display: inline-block;
  }
}
</style>
