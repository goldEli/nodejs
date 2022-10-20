<template>
  <div class="about">
    <h1>This is an about page<span>消失</span></h1>
    <hello-world :msg="'hello'" v-on:getDataFromSon="getDataFromSon"></hello-world>
    
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
const getDataFromSon = (value: string) => {
  console.log("从儿子来的数据", value)
}

</script>


<style lang="less" scoped>
@color: red;
.about {
  h1 {
    color: @color;
  }
  &:hover span {
    display: none;
  }
}
</style>
