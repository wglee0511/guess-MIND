import events from "./events"

const socketController = (socket) => {
    //on assets/js/login.js
    socket.on(events.setNickName, ({nickname}) =>{
        console.log(nickname)
        socket.nickname = nickname
    })

}

export default socketController