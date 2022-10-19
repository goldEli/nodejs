<template>
  <div>
    <span>全选</span><input v-model="store.selectAll" type="checkbox" />
    <span>已完成{{ store.completeNum }}</span
    >/<span>总数{{ store.total }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from "../stores/todoList";
const store = useTodoListStore();
</script>
