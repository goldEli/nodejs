<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label>
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="addDialogVisible = true">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="showTableData" style="width: 100%">
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="userId" label="账号" width="180"></el-table-column>
        <el-table-column prop="type" label="类型" width="180">
          <template slot-scope="scope">{{scope.row.type === 1 ? "超管" : "宿管" }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentChange"
      ></el-pagination>
    </div>

    <el-dialog title="添加" :visible.sync="addDialogVisible">
      <el-form :model="addData">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="addData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="addData.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="addData.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="addData.region" placeholder="选择管理员类型">
            <el-option label="超管" value="1"></el-option>
            <el-option label="宿管" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        name: ""
      },
      tableData: [],
      currentPage: 1,
      pageSize: 5,
      searchName: "",
      addDialogVisible: false,
      addData: {
        name: "",
        userId: "",
        password: "",
        type: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    showTableData: function() {
      console.log(this.currentPage);
      // 基于 当前页 pageSize
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      if (this.searchName) {
        return this.tableData
          .filter(item => item.name.includes(this.searchName))
          .slice(start, end);
      }
      return this.tableData.slice(start, end);
    },
    total: function() {
      return this.tableData.length;
    }
  },
  mounted() {
    console.log(123);
    this.getData();
  },
  methods: {
    getData() {
      this.$http({
        method: "post",
        url: "/admin/getadmin"
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    onSearch() {
      this.currentPage = 1;
      this.searchName = this.formInline.name;
    },
    onAdd() {
      console.log("add!");
      this.$http({
        url: "/admin/addadmin",
        method: "post",
        data: this.addData
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.addDialogVisible = false;
          this.getData();
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$alert("您确定要删除吗", {
        title: "提示",
        callback: () => {
          // 用户确定后执行里面的内容
          this.$http({
            url: "/admin/deladmin",
            method: "post",
            data: {
              id: row.id
            }
          }).then(res => {
            if (res.data.code == "200") {
              this.getData();
            }
          });
        }
      });
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>