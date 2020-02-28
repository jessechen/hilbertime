const TAU = 2 * Math.PI;
const UP = TAU / 4;
const RIGHT = 0;
const DOWN = 3 * TAU / 4;
const LEFT = TAU / 2;

class Direction {
    constructor(theta) {
        this.theta = theta;
    }

    turnRight() {
        if (this.theta === RIGHT) {
            this.theta = DOWN;
        } else {
            this.theta -= TAU / 4;
        }
    }

    turnLeft() {
        if (this.theta === DOWN) {
            this.theta = RIGHT;
        } else {
            this.theta += TAU / 4;
        }
    }

    get xMultiplier() {
        if (this.theta === RIGHT) {
            return 1;
        } else if (this.theta === LEFT) {
            return -1;
        }
        return 0;
    }

    get yMultiplier() {
        if (this.theta === DOWN) {
            return 1;
        } else if (this.theta === UP) {
            return -1;
        }
        return 0;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const initialDepth = 6;
const stepSize = 400 / Math.pow(2, initialDepth);
let x, y, direction;

x = 50;
y = 50;
direction = new Direction(RIGHT);
ctx.beginPath();
ctx.moveTo(x, y);
drawRightCurve(initialDepth);
ctx.stroke();

function drawLeftCurve(depth) {
    if (depth === 1) {
        forward();
        direction.turnLeft();
        forward();
        direction.turnLeft();
        forward();
    } else {
        direction.turnLeft();
        drawRightCurve(depth - 1);
        direction.turnLeft();
        forward();
        drawLeftCurve(depth - 1);
        direction.turnRight();
        forward();
        direction.turnRight();
        drawLeftCurve(depth - 1);
        forward();
        direction.turnLeft();
        drawRightCurve(depth - 1);
        direction.turnLeft();
    }
}

function drawRightCurve(depth) {
    if (depth === 1) {
        forward();
        direction.turnRight();
        forward();
        direction.turnRight();
        forward();
    } else {
        direction.turnRight();
        drawLeftCurve(depth - 1);
        direction.turnRight();
        forward();
        drawRightCurve(depth - 1);
        direction.turnLeft();
        forward();
        direction.turnLeft();
        drawRightCurve(depth - 1);
        forward();
        direction.turnRight();
        drawLeftCurve(depth - 1);
        direction.turnRight();
    }
}

function forward(distance) {
    x += direction.xMultiplier * stepSize;
    y += direction.yMultiplier * stepSize;
    ctx.lineTo(x, y);
}