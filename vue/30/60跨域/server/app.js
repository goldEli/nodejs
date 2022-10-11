const express = require("express");
const app = express();

app.get("/api/test", function (req, res) {
  res.send({
    data: [
      { id: 1, company: "alibaba", contract: "张飞", country: "usa" },
      { id: 2, company: "tencent", contract: "曹操", country: "china" },
      { id: 3, company: "meituan", contract: "周瑜", country: "japan" },
    ],
  });
});

// 监听8888端口
app.listen(8888, () => {
  console.log("服务启动！");
});
