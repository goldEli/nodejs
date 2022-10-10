<template>
  <div>
    <h1>测试ref</h1>
    <test-ref-son ref="son1"></test-ref-son>
  </div>
</template>
<script>
import TestRefSon from "./TestRefSon.vue";
export default {
  data: function() {
    return {
      fatherMsg: "ffffff"
    };
  },
  mounted() {
    console.log("父组件拿到了儿子组件信息：", this.$refs.son1.sonMsg);
  },
  components: {
    TestRefSon
  }
};
</script>