<template>
  <div>
    <input v-model="store.inputVal" @keyup.enter="store.addTodoList" />
    <button @click="store.clear" v-if="store.completeNum > 0">clear</button>
  </div>
</template>
<script setup lang="ts">
import { useTodoListStore } from "../stores/todoList";
const store = useTodoListStore()
</script>
