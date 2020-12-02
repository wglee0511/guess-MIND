import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

app.set('views','src/views'); 
app.set("view engine", "pug");

app.use(express.static("src/static"));
// it is same with app.use(express.static(join(_dirname, "static")))
// it is need to import join from "path"

app.get("/", (req, res) => res.render("home"))


const hadleServerListener = () => {
    console.log(` ❤ Server is rumming : https://localhost:${PORT} `)
}

app.listen(PORT,hadleServerListener);


