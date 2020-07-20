// Choose Grid Size
// Select pixelCanvas to make a grid
const tableEl = document.getElementById('pixelCanvas');

/**
* @description Submit event listener callback. Creates table given user input.
* @param {event} evt - Form submit event
*/
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

// Runs submitForm when the submit button is clicked
document.getElementById('sizePicker').onsubmit = submitForm;


/**
* @description Creates the canvas table.
* @param {int} gridHeight - Desired height of the table
* @param {int} gridWidth - Desired width of the table
*/
function makeGrid(gridHeight, gridWidth) {
	// Create the rows based on the height input
	for (r = 0; r < gridHeight; r++) {
		let rowEl = document.createElement("tr");
		// Create columns in each row based on the width input
        for (c = 0; c < gridWidth; c++) {
            let newCell = document.createElement("td");
            rowEl.appendChild(newCell).className = "cell";
        };
        tableEl.appendChild(rowEl).className = "gridRow";
    };
}

/**
* @description Clears the table.
*/
function clearCanvas() {
	while (tableEl.firstChild) {
  		tableEl.removeChild(tableEl.firstChild);
	}
}


// Pick A Color
// Stores the hex code in color variable
const colorPickerEl = document.getElementById('colorPicker');
let color = colorPickerEl.value;

/**
* @description Change color event listener callback. Sets color to what the user chooses.
* @param {event} evt - Change event
*/
function changeColor(evt) {
	color = colorPickerEl.value;
}

colorPickerEl.addEventListener('change', changeColor);

// Design Canvas
/**
* @description Click cell event listener callback. Fills cell with currently selected color.
* @param {event} evt - Click event
*/
function fillInCell(evt) {
	if (evt.target.classList.contains('cell')) {
		evt.target.style.backgroundColor = color;
	}
}
tableEl.addEventListener('click', fillInCell);
