//Choose Grid Size
const tableEl = document.getElementById('pixelCanvas');

function makeGrid(gridHeight, gridWidth) {
   for (r = 0; r < gridHeight; r++) {
        let rowEl = document.createElement("tr");
        for (c = 0; c < gridWidth; c++) {
            let newCell = document.createElement("td");
            rowEl.appendChild(newCell).className = "cell";
        };
        tableEl.appendChild(rowEl).className = "gridRow";
    };
}

function clearCanvas() {
	while (tableEl.firstChild) {
  		tableEl.removeChild(tableEl.firstChild);
	}
}

function submitForm(evt) {
	evt.preventDefault();
	clearCanvas();
	const formEl = evt.srcElement;
	const heightInputEl = formEl.querySelector('#inputHeight');
	const height = parseInt(heightInputEl.value);
	const widthInputEl = formEl.querySelector('#inputWidth');
	const width = parseInt(widthInputEl.value);
	makeGrid(height, width);
}

document.getElementById('sizePicker').onsubmit = submitForm;

//Pick A Color
const colorPickerEl = document.getElementById('colorPicker');
let color = colorPickerEl.value;

function changeColor(evt) {
	color = colorPickerEl.value;
}
colorPickerEl.addEventListener('change', changeColor);

//Design Canvas
function fillInCell(evt) {
	evt.target.style.backgroundColor = color;
}
tableEl.addEventListener('click', fillInCell);
