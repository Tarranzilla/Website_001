class Cell {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.r = 100;
        this.c = color(random(100, 255), random(100, 255), random(100, 255));

        this.show = function () {
            noStroke();
            fill(this.c);
            ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        };

        this.move = function () {
            var vel = createVector(random(-5, 5), random(-5, 5));
            this.pos.add(vel);
        };

        this.boundaries = function () {
            if (this.pos.x < -this.r) this.pos.x = width + this.r;
            if (this.pos.y < -this.r) this.pos.y = height + this.r;
            if (this.pos.x > width + this.r) this.pos.x = -this.r;
            if (this.pos.y > height + this.r) this.pos.y = -this.r;
        };

        this.collision = function () {
            for (var i = 0; i < cells.length; i++) {
                var d = dist(
                    this.pos.x,
                    this.pos.y,
                    cells[i].pos.x,
                    cells[i].pos.y
                );
                if (d < this.r + cells[i].r) {
                    console.log("Collision");
                    return true;
                } else if (d == this.r + cells[i].r) {
                    console.log("Auto-collision");
                    return false;
                } else {
                    console.log("no collision");
                    stroke(255);
                    line(
                        this.pos.x,
                        this.pos.y,
                        cells[i].pos.x,
                        cells[i].pos.y
                    );
                    return false;
                }
            }
        };
    }
}
