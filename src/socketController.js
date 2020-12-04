import events from "./events"

const socketController = (socket) => {
    //on assets/js/login.js
    socket.on(events.setNickName, ({nickname}) =>{
        socket.nickname = nickname;
        socket.broadcast.emit(events.newUser, { nickname });
    })

}

export default socketController