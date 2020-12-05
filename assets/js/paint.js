const { getSocket } = require("./sockets");


const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const DEFAULT_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect( 0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


const stopPainting = () => {
    painting = false;
}

const startPath = ( x, y ) => {
    ctx.beginPath();
    ctx.moveTo(x,y);
}

const strokePath = ( x, y, color=null) => {
    let currnetColor = ctx.strokeStyle;
    if(color !== null){
        ctx.strokeStyle = color;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.strokeStyle = currnetColor;
}

const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        startPath(x,y)
        getSocket().emit(window.events.beginPath, { x, y });
    } else {
        strokePath(x,y)
        getSocket().emit(window.events.strokePath, { x, y, color : ctx.strokeStyle });
        
    }
}

const startPainting = () => {
    painting = true;
}

const handleColorClick = (event) => {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

const handleRangeChange = (event) => {
    const size = event.target.value;
    ctx.lineWidth = size;
}

const handleModeClick = () => {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling =true;
        mode.innerText = "Paint";
    }
}

const fill = (color = null) => {
    let currnetColor = ctx.fillStyle;
    if(color !== null){
        ctx.fillStyle = color;
    }
    ctx.fillRect( 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = currnetColor;
}

const handleCanvasClick = () => {
    if(filling){
        fill();
        getSocket().emit(window.events.fill, { color : ctx.fillStyle })
    }
}

const handleCM = ( event ) =>{
    event.preventDefault();
};

const handleSaveClick = () => {
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");


    link.href = image;
    link.download = "Canvas";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach( color => color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}

export const handleBeganPath = ({ x, y }) => startPath( x, y );
export const handleStrokedPath = ({ x, y, color }) => strokePath( x, y, color );
export const handleFilled = ({ color }) => fill(color);