const container = document.getElementById("container");
let containerSize=document.getElementById("containerSize");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

let size=16;

containerSize.addEventListener('input', () => {
    size=document.getElementById('containerSize').value;
    console.log(size);
    makeRows(size, size);
});

makeRows(size, size);

// oninput="rangeValue.innerText = this.value"