<template>
  <div>
    <h2>HTML Table</h2>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.company}}</td>
        <td>{{item.contract}}</td>
        <td>{{item.country}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      list: [],
    };
  },
  mounted: function () {
    axios
      .get("/api/test")
      .then((response) => {
        // 处理成功情况
        console.log(response);
        this.list = response.data.data;
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
