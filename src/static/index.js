// static is for front-end

const socket = io("/");

function sendMessage(message){
    socket.emit("newMessage", { message : message })
    console.log(`You : ${message}`)
}

function setNickName(nickname){
    socket.emit("setNickName", { nickname : nickname })
}

function handleNoti(data){
    const {message, nickname} = data;
    console.log( `${nickname} : ${message}` )
}

socket.on("messageNoti",handleNoti)