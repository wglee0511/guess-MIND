import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();

app.set('views','src/views'); 
app.set("view engine", "pug");
app.use(logger("dev"));

app.use(express.static("src/static"));
// it is same with app.use(express.static(join(_dirname, "static")))
// it is need to import join from "path"

app.get("/", (req, res) => res.render("home", { events: JSON.stringify(events) }))


const hadleServerListener = () => {
    console.log(` ❤ Server is rumming : https://localhost:${PORT} `)
}

const server =  app.listen(PORT,hadleServerListener);
const io = socketIO(server);

io.on("connection", socket => socketController(socket, io));

