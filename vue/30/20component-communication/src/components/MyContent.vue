<template>
  <div class="box">
    <my-list :list="list"></my-list>
    <slot></slot>
  </div>
</template>
<script>
import MyList from "./MyList.vue";
export default {
  data: function() {
    return {
      list: [
        { id: 1, text: "react" },
        { id: 2, text: "vue" },
        { id: 3, text: "angular" }
      ]
    };
  },
  components: {
    MyList
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  border: 1px solid green;
}
</style>