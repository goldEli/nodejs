<template>
  <div>
    我是儿子
    <p>我拿到了父亲的数据: {{fatherMsg}}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      sonMsg: "ssss"
    };
  },
  computed: {
    fatherMsg: function() {
      return this.$parent.fatherMsg;
    }
  }
};
</script>