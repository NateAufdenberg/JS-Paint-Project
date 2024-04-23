const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clear = document.getElementById('clear');

let size = Number(document.getElementById('size').textContent);
let isPressed = false;
let color = document.getElementById('color').value;
let x
let y


canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined
    y = undefined

})

function drawCircle(x, y) {
    color = document.getElementById('color').value;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    color = document.getElementById('color').value;
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

// ================= Video End =========================

const minus = document.getElementById('decrease');

minus.onclick = decreaseSize;

function decreaseSize() {
    size -= 1;
    document.getElementById('size').textContent = size;
}

const add = document.getElementById('increase');

add.onclick = increaseSize;

function increaseSize() {
    size += 1;
    document.getElementById('size').textContent = size;
}