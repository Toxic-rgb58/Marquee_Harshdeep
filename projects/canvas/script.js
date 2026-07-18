const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clearBtn');

let isDrawing = false;
let brushColor = '#000000';
let brushWidth = 5;



canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    
});

canvas.addEventListener('mouseup', (event) => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
});
canvas.addEventListener('mouseleave',()=>{
    isDrawing=false
});
canvas.addEventListener('mouseenter',()=>{
    console.log('You can draw!!')
});
canvas.addEventListener('dblclick', () => {
    const randombg = `hsl(${Math.random() * 360}, 80%, 90%)`;
    canvas.style.background = randombg;
});
canvas.addEventListener('contextmenu',(event)=>{
    event.preventDefault()
    const color = ['red','green','black','blue','orange']
    const randomColor = color[Math.floor(Math.random()*color.length)]
    brushColor = randomColor;
    alert(`Brush color changed to: ${randomColor}`);
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});