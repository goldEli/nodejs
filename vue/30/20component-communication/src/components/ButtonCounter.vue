<template>
  <button @click="onClick">按钮点击的{{count}}次</button>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  methods: {
    onClick: function() {
      this.count++;
    }
  }
};
</script>