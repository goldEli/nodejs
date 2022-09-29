const express = require("express");
const router = express.Router();
const controllersStudents = require("../controllers/students");

/* 
get    查
post   增
delete 删
put    该
*/
router.post("/", function(req, res) {
  const name = req.body.name;
  const age = req.body.age;
  controllersStudents.add({name, age}, function(data) {
    res.send(data)
  })
})

router.delete("/", function (req, res) {
  const id = req.body.id;
  controllersStudents.delete({id} ,function (data) {
    res.send(data);
  });
});

router.get("/", function (req, res) {
  controllersStudents.getAll(function (data) {
    res.send(data);
  });
});


router.put("/", function(req, res) {
  const name = req.body.name;
  const age = req.body.age;
  const id = req.body.id;
  controllersStudents.update({name, age, id}, function(data) {
    res.send(data)
  })
})


router.post("/searchName", function(req, res) {
  const searchName = req.body.searchName;
  controllersStudents.searchByName({searchName}, function(data) {
    res.send(data)
  })
})

module.exports = router;
