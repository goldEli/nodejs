<template>
  <div>加倍{{doubleCount}}</div>
</template>
<script>
export default {
  name: "MyDouble",
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  }
};
</script>