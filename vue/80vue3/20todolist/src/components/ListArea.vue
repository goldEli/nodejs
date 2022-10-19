<template>
  <div class="box">
    <ul v-if="todoListStore.todoList.length>0">
      <li v-for="item in todoListStore.todoList">
        <input v-model="item.complete" type="checkbox" />
        <span>{{item.value}}</span>
        <button @click="todoListStore.del(item.id)">delete</button>
      </li>
    </ul>
    <div v-else>无数据</div>
  </div>
</template>

<script setup lang="ts">
// import { useCounterStore } from "../stores/counter";
import { useTodoListStore } from "../stores/todoList";

// const store = useCounterStore();
const todoListStore = useTodoListStore()

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
