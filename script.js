const container = document.getElementById("container");
const containerSize=document.getElementById("containerSize");

let mouseDown = false;
let color = "black";

// Create dynamically grid items based in the slide bar size
function makeRows(size) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', size);
  container.style.setProperty('--grid-size', size);
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
        cell.style.backgroundColor = color;
      }
    });

    container.appendChild(cell).className = "grid-item";
  };
};

let size=16;
makeRows(size);

containerSize.addEventListener('input', () => {
    size=document.getElementById('containerSize').value;
    makeRows(size);
});

// oninput="rangeValue.innerText = this.value"