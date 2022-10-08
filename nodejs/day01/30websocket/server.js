const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const users = [];

//specify the html we will use
app.use("/", express.static(__dirname + "/public"));
//bind the server to the 80 port
server.listen(3000); //publish to heroku
//handle the socket
io.sockets.on("connection", function (socket) {
  //new user login
  socket.on("login", function (nickname) {
    if (users.indexOf(nickname) > -1) {
      socket.emit("error", "名字已经存在");
    } else {
      //socket.userIndex = users.length;
      socket.nickname = nickname;
      users.push(nickname);
      socket.emit("loginSuccess", nickname);
      io.sockets.emit("system", nickname, users.length, "login");
    }
  });
  //user leaves
  socket.on("disconnect", function () {
    console.log("断开链接");
    if (socket.nickname != null) {
      users.splice(users.indexOf(socket.nickname), 1);
      socket.broadcast.emit("system", socket.nickname, users.length, "logout");
    }
  });
  //new message get
  socket.on("postMsg", function (msg) {
    io.sockets.emit("newMsg", socket.nickname, msg);
  });
});
