$.ajax({
  url: "/users/username",
  type: "get",
  dataType: "json",
  success: function (data) {
    $("#username").text(data.data);
  },
});

function renderTable(data) {
  $("tbody").empty();
  data.forEach((element) => {
    $("tbody").append(`
                <tr>
                  <td>${element.id}</td>
                  <td>${element.name}</td>
                  <td>${element.age}</td>
                  <td>
                    <button data-id="${element.id}" type="button" class="btn btn-primary btn-xs edit-btn">
                      修改
                    </button>
                    <button data-id="${element.id}" type="button" class="btn btn-danger btn-xs delete-btn">
                      删除
                    </button>
                  </td>
                </tr>
          `);
  });
}

// 请求table数据
function getStudents(callback) {
  $.ajax({
    url: "/students",
    type: "get",
    dataType: "json",
    success: function (data) {
      if (data.code === 200) {
        callback(data.data);
      }
    },
  });
}

// 通过id删除table数据
function deleteStudentById(id, callback) {
  $.ajax({
    url: "/students",
    data: { id },
    type: "delete",
    dataType: "json",
    success: function () {
      callback();
    },
  });
}

// 添加学生
function addStudent(name, age, callback) {
  $.ajax({
    url: "/students",
    data: { name, age },
    type: "post",
    dataType: "json",
    success: function () {
      callback();
    },
  });
}

// 搜索学生
function searchStudentsByName(searchName, callback) {
  $.ajax({
    url: "/students/searchName",
    data: { searchName },
    type: "post",
    dataType: "json",
    success: function (data) {
      if (data.code) {
        callback(data.data);
      }
    },
  });
}

// 修改学生
function editStudent(id, name, age, callback) {
  $.ajax({
    url: "/students",
    data: { id, name, age },
    type: "put",
    dataType: "json",
    success: function () {
      callback();
    },
  });
}

// 进入页面 请求table数据
getStudents(function (data) {
  renderTable(data);
});

/* 
      删除
      */
$("tbody").on("click", ".delete-btn", function (event) {
  const id = parseInt($(event.target).attr("data-id"));
  deleteStudentById(id, function () {
    getStudents(function (data) {
      renderTable(data);
    });
  });
});

/*
 *添加
 */
$("#addSaveBtn").click(function (event) {
  const name = $("#addStudentNameInput").val();
  const age = parseFloat($("#addStudentAgeInput").val());
  if (!name || !age) {
    alert("不能为空");
    return;
  }
  // 添加到后端
  addStudent(name, age, function () {
    getStudents(function (data) {
      renderTable(data);
    });
  });

  $("#addModal").modal("hide");
});

/**
 * 修改
 */
$("tbody").on("click", ".edit-btn", function (event) {
  const id = parseInt($(event.target).attr("data-id"));
  console.log(id);
  // 打开模态框
  $("#editModal").modal("show");

  getStudents(function (data) {
    // renderTable(data);
    const current = data.find((item) => item.id);
    $("#editStudentIdInput").val(id);
    $("#editStudentAgeInput").val(current.age);
    $("#editStudentNameInput").val(current.name);
  });
});

$("#editSaveBtn").click(function () {
  const id = parseFloat($("#editStudentIdInput").val());
  const age = parseFloat($("#editStudentAgeInput").val());
  const name = $("#editStudentNameInput").val();
  editStudent(id, name, age, function () {
    // 更新学生
    getStudents(function (data) {
      renderTable(data);
    });
  });
  $("#editModal").modal("hide");
});

$("#searchBtn").click(function () {
  const searchByName = $("#searchNameInput").val();
  searchStudentsByName(searchByName, function (data) {
    renderTable(data)
  });
});
