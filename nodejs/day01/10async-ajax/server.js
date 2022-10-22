const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/students", function (req, res) {
  res.send(["张三", "李四", "王五"]);
});
app.get("/getBankIdByName", function (req, res) {
  const data = {
    张三: "6228 9559 8743 9870",
    李四: "6228 9559 8743 9871",
    王五: "6228 9559 8743 9872",
  };
  const name = req.query.name;
  res.send({ id: data[name] });
});
app.get("/getMoneyById", function (req, res) {
  const data = {
    "6228 9559 8743 9870": 3000,
    "6228 9559 8743 9871": 200,
    "6228 9559 8743 9872": 10000,
  };
  const id = req.query.id;
  res.send({ money: data[id] });
});

app.listen("3000", function () {
  console.log("后端服务已经启动http://localhost:3000");
});
