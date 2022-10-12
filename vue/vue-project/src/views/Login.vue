<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <el-radio-group v-model="form.type">
          <el-radio label="学生"></el-radio>
          <el-radio label="管理员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        username: "",
        password: "",
        type: "学生"
      }
    };
  },
  methods: {
    onSubmit: function() {

    }
  },
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background: url("../assets/images/login-bg.jpg");
  background-size: cover;
}
.el-form {
  width: 400px;
  height: 280px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -160px;
  background: rgba(255, 255, 255, 0.3);
  padding-top: 40px;
  padding-right: 40px;
}
</style>