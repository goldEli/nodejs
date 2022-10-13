<template>
  <el-container>
    <el-header>
      <div>宿舍管理系统</div>
      <div>
        <b>张三</b>
        <i class="el-icon-close"></i>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-aside {
  background-color: #d3dce6;
}
.el-main {
  background-color: #e9eef3;
}
.el-container {
  height: 100%;
}
</style>