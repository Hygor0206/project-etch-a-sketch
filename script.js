const gridContainer = document.getElementById("grid");
const slider=document.getElementById("sizeSlider");
const sliderValue = document.getElementById("sizeValue");
const inputColor = document.getElementById("colorPicker");
const colorMode = document.getElementById("colorBtn");
const rainbowMode = document.getElementById("rainbowBtn");
const erase = document.getElementById("eraserBtn");
const clear = document.getElementById("clearBtn");

let mouseDown = false

let color="#000000";
let botaoDownload = document.getElementById('download');

// Create dynamically grid items based in the slide bar size
function makeRows(size) {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (i = 0; i < (size**2); i++) {
    let cell = document.createElement("div");

    // A event when the mouse button is clicked
    cell.addEventListener("mousedown",() =>{
        mouseDown=true;
        cell.style.backgroundColor = color;
    });

    // A event when the mouse button was released
    cell.addEventListener("mouseup",() =>{
        mouseDown=false;
    });
    
    // A event, when the mouse over a grid item, then, change his color
    cell.addEventListener("mouseover",() =>{
      if(mouseDown){
        cell.style.backgroundColor = color; // Color change according to color input
      }
    });

    gridContainer.appendChild(cell).className = "grid-item";
  };
};

let size=16;
makeRows(size);

// Slider Bar to change the size of grid
slider.addEventListener('input', () => {
    size=document.getElementById('sizeSlider').value;
    sliderValue.textContent = size+"x"+size;
    makeRows(size);
});

// Change the brush color
inputColor.addEventListener('change', () => {
  color=inputColor.value; 
});

// Color Mode
colorMode.addEventListener('click', () => {
  color=inputColor.value;
});

// Erase Mode
erase.addEventListener('click', () => {
  color="white";
});

// Clear Grid
clear.addEventListener('click', () => {
  grid.innerHTML = '';
  makeRows(size);
});

// Download
botaoDownload.addEventListener('click', () =>{
  gridContainer.style.boxShadow = 'none';
  html2canvas(gridContainer).then(function(canvas) {
    let imgData = canvas.toDataURL('image/jpeg');
    let link = document.createElement('a');
    link.href = imgData;
    link.download = 'voxeldraw.jpeg';
    link.click();
  });
  gridContainer.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
});