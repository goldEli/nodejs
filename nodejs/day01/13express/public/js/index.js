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
function getStudents() {
  $.ajax({
    url: "/students",
    type: "get",
    dataType: "json",
    success: function (data) {
      if (data.code === 200) {
        renderTable(data.data);
      }
    },
  });
}

// 通过id删除table数据
function deleteStudentById(id) {
  $.ajax({
    url: "/students",
    data: { id },
    type: "delete",
    dataType: "json",
    success: function () {
      // 删除成功 重新请求table数据
      getStudents();
    },
  });
}

// 添加学生
function addStudent(name, age) {
  $.ajax({
    url: "/students",
    data: { name, age },
    type: "post",
    dataType: "json",
    success: function () {
      // 添加成功 重新请求table数据
      getStudents();
    },
  });
}

// 进入页面 请求table数据
getStudents();

/* 
      删除
      */
$("tbody").on("click", ".delete-btn", function (event) {
  const id = parseInt($(event.target).attr("data-id"));
  deleteStudentById(id);
});

/* 
      添加
      */
$("#addStudentBtn").click(function (event) {
  const name = $("#studentName").val();
  const age = parseFloat($("#studentAge").val());
  if (!name || !age) {
    alert("不能为空");
    return;
  }
  // 添加到后端
  addStudent(name, age);

  $('#addModal').modal('hide')
});
