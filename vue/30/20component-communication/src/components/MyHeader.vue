<template>
  <div class="box">
    <p>当前时间：{{time}}</p>
    <date-btn v-on:update-time="setTime"></date-btn>
    <my-hello></my-hello>
    <my-hello name="tom"></my-hello>
    <my-hello name="lily"></my-hello>
    <my-hello v-for="(name, index) in names" v-bind:key="index" :name="name"></my-hello>
  </div>
</template>
<script>
import MyHello from "./MyHello.vue";
import DateBtn from "./DateBtn.vue";
export default {
  data: function() {
    return {
      time: new Date().toLocaleTimeString(),
      names: ["张飞", "赵云", "曹操"]
    };
  },
  components: {
    MyHello,
    DateBtn
  },
  methods: {
    setTime: function(val) {
      this.time = val;
      console.log("从儿子传来的数据", val);
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 60px;
  background-color: pink;
}
</style>