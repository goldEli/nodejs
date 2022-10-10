<template>
  <button @click="onClick">更新当前时间</button>
</template>
<script>
export default {
  methods: {
    onClick: function() {
      this.$emit("update-time", new Date().toLocaleTimeString());
    }
  }
};
</script>