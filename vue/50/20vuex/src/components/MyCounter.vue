<template>
  <div>
    <p>{{count}}</p>
    <p>{{doubleCount}}</p>
    <button @click="increment">click</button>
    <my-double></my-double>
  </div>
</template>

<script>
import MyDouble from "./MyDouble.vue"
export default {
  name: "MyCounter",
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  },
  components: {
    MyDouble
  }
};
</script>