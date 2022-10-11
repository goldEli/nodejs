<template>
  <div>
    <router-link to="/user/profile">
      <span>用户信息</span>
    </router-link>
    <router-link to="/user/setting">
      <span>用户设置</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>