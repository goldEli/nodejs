<script>
export default {
  data: function () {
    return {
      todos: [
        { id: 1, value: "123", complete: true },
        { id: 2, value: "111", complete: false },
      ],
      inputVal: "",
    };
  },
  computed: {
    total: function () {
      return this.todos.length;
    },
    completeNum: function () {
      return this.todos.filter((item) => item.complete).length;
    },
    selectAllValue: {
      // 获取值时做处理
      get: function () {
        console.log("获取值");
        return this.completeNum === this.total;
      },
      // 设置值时做处理
      set: function (val) {
        console.log("设置值", val);
        this.todos.forEach((todo) => {
          todo.complete = val;
        });
      },
    },
  },
  methods: {
    del: function (id) {
      console.log(id, typeof id, this.todos);
      for (let i = 0; i < this.todos.length; ++i) {
        const todo = this.todos[i];
        if (todo.id === id) {
          this.todos.splice(i, 1);
          break;
        }
      }
    },
    add: function () {
      this.todos.push({
        id: this.createId(),
        value: this.inputVal,
        complete: false,
      });
      this.inputVal = "";
    },
    clear: function () {
      this.todos = this.todos.filter((todo) => !todo.complete);
    },
    createId: function () {
      return parseInt(Math.random() * 10 * 6) + new Date().getTime();
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input v-model="inputVal" @keyup.enter="add" />
      <button v-if="completeNum > 0" @click="clear">清除</button>
    </div>
    <ul>
      <li v-for="todo in todos">
        <input v-model="todo.complete" type="checkbox" />
        <span :class="{ del: todo.complete }">{{ todo.value }}</span>
        <button @click="del(todo.id)">删除</button>
      </li>
    </ul>
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
