import express from "express";

const PORT = 4000;
const app = express();

app.set('views','src/views'); 
app.set("view engine", "pug");

app.get("/", (req, res) => res.render("home"))


const hadleServerListener = () => {
    console.log(` ❤ Server is rumming : https://localhost:${PORT} `)
}

app.listen(PORT,hadleServerListener);


