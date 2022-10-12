<template>
  <div class="box">
    <p class="message">msg</p>
  </div>
</template>
<style lang="less" scoped>
@color: rgb(36, 196, 55);
.box {
  width: 200px;
  height: 200px;
  border: 1px solid @color;
  .message {
    color: @color;
  }
}
</style>