const { handleNewUser, handleDisconnected } = require("./notification");
import { handleNewMsg } from "./chat";
import { handleBeganPath, handleStrokedPath } from "./paint";


let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
    const { events } = window;
    socket = aSocket;
    socket.on(events.newUser, handleNewUser);
    socket.on(events.disconnected, handleDisconnected);
    socket.on(events.newMsg, handleNewMsg);
    socket.on(events.beganPath, handleBeganPath);
    socket.on(events.strokedPath, handleStrokedPath);
    socket.on(events.filled, handleFilled);
}