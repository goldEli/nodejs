<template>
  <div class="about">
    <h1>This is an about page<span>消失</span></h1>
  </div>
</template>

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
