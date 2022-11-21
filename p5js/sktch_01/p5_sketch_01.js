let canvas_001;
let cell;
let canvas_wrapper = document.getElementById("canvas_wrapper");
let canvas_height = canvas_wrapper.clientHeight;
let canvas_width = canvas_wrapper.clientWidth;

var cells = [];

function setup() {
    canvas_001 = createCanvas(canvas_width, canvas_height);
    canvas_001.parent("canvas_wrapper");
    background(0);

    cell = new Cell();
    cells.push(cell);

    cell2 = new Cell();
    cells.push(cell2);

    cell3 = new Cell();
    cells.push(cell3);
}

function draw() {
    background(0);
    fill(255);

    for (var i = 0; i < cells.length; i++) {
        cells[i].show();
        cells[i].move();
        cells[i].boundaries();
        cells[i].collision();
    }
}

function windowResized() {
    canvas_001.resizeCanvas(windowWidth, windowHeight * 0.85);
}
