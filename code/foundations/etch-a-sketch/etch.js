// buttons

const colorButton = document.getElementById("color");
const rainbowButton = document.getElementById("rainbow");
const eraseButton = document.getElementById("erase");
const resetButton = document.getElementById("reset");
const sizeSlider = document.querySelector('#size');
const sizeLabel = document.querySelector('#sizeLabel');
const colorPicker = document.getElementById('color-picker');

colorButton.addEventListener('click', setColorMode);
rainbowButton.addEventListener('click', setRainbowMode);
eraseButton.addEventListener('click', setEraserMode);
resetButton.addEventListener('click', resetGrid);
sizeSlider.addEventListener('input', updateGrid);

// defaults

const defaultMode = "color";
const defaultSize = 16;

// initialise

const canvas = document.querySelector("div.canvas");
let gridSize = defaultSize;
let currentMode = defaultMode;
let mouseDown = false;
canvas.addEventListener('mousedown', event => {
    mouseDown = true;
    event.preventDefault()
})
document.onmouseup = () => (mouseDown = false);

// set mode

function setColorMode() {
    currentMode = "color";
}

function setRainbowMode() {
    currentMode = "rainbow";
}
function setEraserMode() {
    currentMode = "eraser";
}

// rainbow helper

function rainbow() {
    return Math.floor((Math.random() * 256));
}

// Get grid size

function updateGrid() {
    sizeLabel.textContent = sizeSlider.value + " x " + sizeSlider.value;
    gridSize = sizeSlider.value;
    resetGrid();
    makeGrid(gridSize);
}

// make grid

function makeGrid(gridSize) {
    canvas.style = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('grid-item');
        pixel.setAttribute('draggable', false);
        pixel.addEventListener('mouseover', colorBackground);
        pixel.addEventListener('mousedown', colorBackground);
        pixel.addEventListener('click', colorBackground);
        canvas.appendChild(pixel);
    }
}

// set color

function colorBackground(e) {
    if (e.type === 'mouseover' && mouseDown) {
        if (currentMode === "rainbow") {
            e.target.style.backgroundColor = `rgb(${rainbow()}, ${rainbow()}, ${rainbow()})`;
        } else if (currentMode === "color") {
            e.target.style.backgroundColor = colorPicker.value;
        } else {
            e.target.style.backgroundColor = `transparent`;
        }
    } else if (e.type === 'click') {
        if (currentMode === "rainbow") {
            e.target.style.backgroundColor = `rgb(${rainbow()}, ${rainbow()}, ${rainbow()})`;
        } else if (currentMode === "color") {
            e.target.style.backgroundColor = colorPicker.value;
        } else {
            e.target.style.backgroundColor = `transparent`;
        }
    } else {
        return
    }
}

// reset grid

function resetGrid() {
    canvas.innerHTML = '';
    makeGrid(gridSize);
}

// run app

window.onload = function () {
    makeGrid(gridSize);
    sizeLabel.textContent = sizeSlider.value + " x " + sizeSlider.value;
}
