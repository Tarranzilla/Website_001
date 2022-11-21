let canvas_001;

let canvas_wrapper = document.getElementById("canvas_wrapper");
let canvas_height = canvas_wrapper.clientHeight;
let canvas_width = canvas_wrapper.clientWidth;

let star01;
let stars = [];
let speed = 100;
let starnumber = 100;
let min_star_size = 1;
let max_star_size = 30;
let espalhamento = 10;

function setup() {
    canvas_001 = createCanvas(canvas_width, canvas_height);
    canvas_001.parent("canvas_wrapper");
    background(100);

    for (let i = 0; i < starnumber; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0);
    fill(255);
    noStroke();

    translate(width / 2, height / 2);

    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].update();
    }
}

class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz = this.z;
        this.max_size = random(min_star_size, max_star_size);
        this.color = color(random(200, 255), 0, 0, random(50, 100));
    }

    show() {
        let r = map(this.z, 0, width, this.max_size, 0);

        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        this.pz = this.z;

        strokeWeight(5);
        stroke(this.color);
        line(px, py, sx, sy);

        noStroke();
        fill(this.color);
        for (let i = 0; i < espalhamento; i++) {
            ellipse(sx, sy, r * i);
        }
    }

    update() {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.max_size = random(min_star_size, max_star_size);
            this.pz = this.z;
        }
    }
}
