<script >
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <span>首页</span>
      </router-link>
      <router-link to="/guide">
        <span>指南</span>
      </router-link>
      <router-link to="/api">
        <span>api参考</span>
      </router-link>
      <!-- <span>首页</span>
      <span>指南</span>
      <span>api参考</span>-->
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
span {
  display: inline-block;
  padding: 8px;
  background-color: pink;
}
</style>
