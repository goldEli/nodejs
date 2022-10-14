<script>

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
