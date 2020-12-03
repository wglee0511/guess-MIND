(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNoti = handleNoti;

function handleNoti(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTm90aSIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBeUI7QUFBQSxNQUNyQkMsT0FEcUIsR0FDQUQsSUFEQSxDQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxRQURZLEdBQ0FGLElBREEsQ0FDWkUsUUFEWTtBQUU1QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWdCRixRQUFoQixnQkFBOEJELE9BQTlCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTm90aShkYXRhKXtcclxuICAgIGNvbnN0IHttZXNzYWdlLCBuaWNrbmFtZX0gPSBkYXRhO1xyXG4gICAgY29uc29sZS5sb2coIGAke25pY2tuYW1lfSA6ICR7bWVzc2FnZX1gIClcclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// static is for front-end
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You : ".concat(message));
}

function setNickName(nickname) {
  socket.emit("setNickName", {
    nickname: nickname
  });
}

socket.on("messageNoti", _chat.handleNoti);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGFmOGYwNmUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tOYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU5vdGkiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQTZCO0FBQ3pCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBR0E7QUFBWixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsaUJBQXFCSCxPQUFyQjtBQUNIOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQThCO0FBQzFCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBR0E7QUFBYixHQUEzQjtBQUNIOztBQUVEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxhQUFWLEVBQXdCQyxnQkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZU5vdGl9IGZyb20gXCIuL2NoYXRcIlxyXG4vLyBzdGF0aWMgaXMgZm9yIGZyb250LWVuZFxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIDogbWVzc2FnZSB9KVxyXG4gICAgY29uc29sZS5sb2coYFlvdSA6ICR7bWVzc2FnZX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROaWNrTmFtZShuaWNrbmFtZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcInNldE5pY2tOYW1lXCIsIHsgbmlja25hbWUgOiBuaWNrbmFtZSB9KVxyXG59XHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aVwiLGhhbmRsZU5vdGkpICJdfQ==
},{"./chat":1}]},{},[2])