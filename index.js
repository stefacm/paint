
// Guardar el elemento y el contexto
const mainCanvas = document.getElementById('main-canvas');
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;


// Ancho y alto del canvas de acuerdo al tamaño de la ventana
window.addEventListener("load", function () {
  mainCanvas.width = window.innerWidth * 0.7;
  mainCanvas.height = window.innerHeight * 0.7;

  // Si deseas redimensionar el canvas cada vez que el usuario cambia el tamaño de la ventana:
  window.addEventListener("resize", function () {
    mainCanvas.width = window.innerWidth * 0.7;
    mainCanvas.height = window.innerHeight * 0.7;
  });
});

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 10;
  context.strokeStyle = "#000";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
}

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener('mousemove', mouseMoving)
}

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
}

const mouseUp = (evt) => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
}

mainCanvas.addEventListener('mousedown', mouseDown);
mainCanvas.addEventListener('mouseup', mouseUp);