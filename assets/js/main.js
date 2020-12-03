import {handleNoti} from "./chat"
// static is for front-end

const socket = io("/");

function sendMessage(message){
    socket.emit("newMessage", { message : message })
    console.log(`You : ${message}`)
}

function setNickName(nickname){
    socket.emit("setNickName", { nickname : nickname })
}

socket.on("messageNoti",handleNoti) 