const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.globalCompositeOperation = 'multiply';


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lw = 20;

function draw(event) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
    hue++;
    if(hue == 359) {
        hue = 1;
    }
    lw = Math.floor(Math.random() * (30 - 20) + 20);
    ctx.lineWidth = lw;


}

canvas.addEventListener('mousedown',(event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];

});
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);
canvas.addEventListener('mousemove',draw);