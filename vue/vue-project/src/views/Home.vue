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
      <el-aside width="200px">
        <el-menu
          :default-active="navList[0].link"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item :key="item.link" v-for="item in navList" :index="item.link">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data: function() {
    return {
      navList: [
        {
          title: "公告主页",
          link: "/home/noticehome"
        },
        {
          title: "宿舍管理",
          link: "/home/dorm"
        },
        {
          title: "学生管理",
          link: "/home/student"
        },
        {
          title: "公告管理",
          link: "/home/notice"
        },
        {
          title: "管理员管理",
          link: "/home/admin"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


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
.el-header .el-icon-close {
  color: red;
  margin-left: 10px;
  cursor: pointer;
}
.el-menu {
  height: 100%;
}
</style>