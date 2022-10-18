<script setup>
import { reactive, ref, computed, watchEffect } from "vue";
// 引用类型
const data = reactive({
  todos: [
    { id: 1, value: "123", complete: true },
    { id: 2, value: "111", complete: false },
  ],
});
// 原始类型 inputValue.value
const inputVal = ref("");

function del(id) {
  for (let i = 0; i < data.todos.length; ++i) {
    const todo = data.todos[i];
    if (todo.id === id) {
      data.todos.splice(i, 1);
      break;
    }
  }
}
function add() {
  data.todos.push({
    id: createId(),
    value: inputVal.value,
    complete: false,
  });
  inputVal.value = "";
}
function clear() {
  console.log("clear");
  data.todos = data.todos.filter((todo) => !todo.complete);
}
function createId() {
  return parseInt(Math.random() * 10 * 6) + new Date().getTime();
}

const total = computed(() => {
  console.log("total 更新");
  return data.todos.length;
});
const completeNum = computed(() => {
  console.log("completeNum 更新");
  return data.todos.filter((item) => item.complete).length;
});

const selectAllValue = computed({
  // 获取值时做处理
  // get: function () {
  //   console.log("获取值", completeNum, total);
  //   return completeNum === total;
  // },
  get: function () {
    console.log("获取值", completeNum, total);
    return (
      data.todos.length === data.todos.filter((item) => item.complete).length
    );
  },
  // 设置值时做处理
  set: function (val) {
    console.log("设置值", val);
    data.todos.forEach((todo) => {
      todo.complete = val;
    });
  },
});

// total: function () {
//   return this.todos.length;
// },
// completeNum: function () {
//   return this.todos.filter((item) => item.complete).length;
// },
// selectAllValue: {
//   // 获取值时做处理
//   get: function () {
//     console.log("获取值");
//     return this.completeNum === this.total;
//   },
//   // 设置值时做处理
//   set: function (val) {
//     console.log("设置值", val);
//     this.todos.forEach((todo) => {
//       todo.complete = val;
//     });
//   },
// },
</script>

<template>
  <div>
    <div>
      <input v-model="inputVal" @keyup.enter="add" />
      <button v-if="completeNum > 0" @click="clear">清除</button>
    </div>
    <div>
      <ul v-if="data.todos.length > 0">
        <li v-for="todo in data.todos" :key="todo.id">
          <input v-model="todo.complete" type="checkbox" />
          <span :class="{ del: todo.complete }">{{ todo.value }}</span>
          <button @click="del(todo.id)">删除</button>
        </li>
      </ul>
      <div v-else>
        没有数据
      </div>
    </div>
    <div>
      <span>全选</span>
      <input v-model="selectAllValue" type="checkbox" />
      <span>{{ completeNum }}/{{ total }}</span>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
