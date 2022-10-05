/*
 *hichat v0.4.2
 *Wayou Mar 28,2014
 *MIT license
 *view on GitHub:https://github.com/wayou/HiChat
 *see it in action:http://hichat.herokuapp.com/
 */

window.onload = function () {
  var hichat = new HiChat();
  hichat.init();
};

var HiChat = function () {
  this.socket = null;
};

HiChat.prototype = {
  init: function () {
    var that = this;
    this.socket = io.connect();

    // 与服务器建立链接
    this.socket.on("connect", function () {
      $("#info").text("输入昵称");
      $("#loginWrapper").show();
      $("#nicknameInput").focus();
    });

    // 如果昵称重复
    this.socket.on("nickExisted", function () {
      $("#info").text("昵称重复了，请输入其他昵称");
    });

    // 登录成功
    this.socket.on("loginSuccess", function () {
      document.title = "hichat | " + $("#nicknameInput").val();

      $("#loginWrapper").hide();
    });

    // 系统报错
    this.socket.on("error", function (err) {
      if (document.getElementById("loginWrapper").style.display == "none") {
        document.getElementById("status").textContent = "!fail to connect :(";
      } else {
        document.getElementById("info").textContent = "!fail to connect :(";
      }
    });

    // 系统信息
    this.socket.on("system", function (nickName, userCount, type) {
      let msg = "";
      if (type === "login") {
        msg = nickName + "加入";
      } else {
        msg = nickName + "离开";
      }
      this._displayNewMsg("系统消息：", msg);

      // 更新用户数
      $("#status").text(`当前${userCount}人在线`);
    });

    // 发送新消息
    // this.socket.on("newMsg", function (user, msg) {
    //   that._displayNewMsg(user, msg);
    // });

    // 点击登录按钮
    $("#loginBtn").click(function () {
      const nickName = $("#nicknameInput").val().trim();
      debugger  
      if (nickName) {
        that.socket.emit("login", nickName);
      }
    });

    // // 点击发送按钮
    // document.getElementById("sendBtn").addEventListener(
    //   "click",
    //   function () {
    //     var messageInput = document.getElementById("messageInput"),
    //       msg = messageInput.value;
    //     messageInput.value = "";
    //     messageInput.focus();
    //     if (msg.trim().length != 0) {
    //       that.socket.emit("postMsg", msg);
    //       that._displayNewMsg("me", msg);
    //       return;
    //     }
    //   },
    //   false
    // );
  },

  _displayNewMsg: function (user, msg) {
    var container = document.getElementById("historyMsg"),
      msgToDisplay = document.createElement("p"),
      date = new Date().toTimeString().substr(0, 8);

    msgToDisplay.innerHTML =
      user + '<span class="timespan">(' + date + "): </span>" + msg;
    container.appendChild(msgToDisplay);
    container.scrollTop = container.scrollHeight;
  },
};
