import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 5000;
const app = express();

app.set('views','src/views'); 
app.set("view engine", "pug");
app.use(logger("dev"));

app.use(express.static("src/static"));
// it is same with app.use(express.static(join(_dirname, "static")))
// it is need to import join from "path"

app.get("/", (req, res) => res.render("home"))


const hadleServerListener = () => {
    console.log(` ❤ Server is rumming : https://localhost:${PORT} `)
}

const server =  app.listen(PORT,hadleServerListener);
const io = socketIO(server);

io.on("connection", socket => {
    socket.on("newMessage", ({message}) => {
        socket.broadcast.emit("messageNoti",{ 
            message,
            nickname : socket.nickname || "Anon"
         })
    });
    socket.on("setNickName", ({nickname}) => {
        socket.nickname = nickname;
    })
});

