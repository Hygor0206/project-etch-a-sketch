const gridContainer = document.getElementById("grid");
const slider=document.getElementById("sizeSlider");
const sliderValue = document.getElementById("sizeValue");
const inputColor = document.getElementById("colorPicker");
const colorMode = document.getElementById("colorBtn");
const rainbow = document.getElementById("rainbowBtn");

let mouseDown = false;
let color="#000000";

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
    });

    // A event when the mouse button was released
    cell.addEventListener("mouseup",() =>{
        mouseDown=false;
    });
    
    // A event when the mouse over a grid item and them change his color
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
inputColor.addEventListener("change", () => {
  color=inputColor.value; 
});

// oninput="rangeValue.innerText = this.value"