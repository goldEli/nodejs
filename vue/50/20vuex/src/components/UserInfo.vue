<template>
  <div>
    <label>用户名：</label>
    <span>{{username}}</span>
  </div>
</template>
<script>
export default {
  computed: {
    username() {
      // user 模块名
      return this.$store.state.user.username;
    }
  },
  mounted() {
    // dispatch 调用 actions 的方法
    this.$store.dispatch("getUserInfo", 1);
  }
};
</script>