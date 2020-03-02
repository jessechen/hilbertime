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
const initialDepth = 3;
const pixelSize = 128;
const stepSize = pixelSize / Math.pow(2, initialDepth);
let x, y, direction;

drawNumeral1(32 - pixelSize + stepSize, 32, initialDepth);
drawNumeral1(32 + 2 * pixelSize - stepSize, 32, initialDepth);
drawColon(32 + 6 * pixelSize - stepSize, 32, initialDepth);
drawNumeral2(32 + 8 * pixelSize - stepSize, 32, initialDepth);
drawNumeral7(32 + 12 * pixelSize - stepSize, 32, initialDepth);

function drawNumeral0(initX, initY, depth) {
    x = initX + 3 * pixelSize - stepSize;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    ctx.stroke();
}

function drawNumeral1(initX, initY, depth) {
    x = initX + 2 * pixelSize - stepSize;
    y = initY;
    direction = new Direction(LEFT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral2(initX, initY, depth) {
    x = initX;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    ctx.stroke();
}

function drawNumeral3(initX, initY, depth) {
    x = initX;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    ctx.stroke();
    x = initX + 3 * pixelSize - stepSize;
    y = initY + 3 * pixelSize;
    direction = new Direction(LEFT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    ctx.stroke();
}

function drawNumeral4(initX, initY, depth) {
    x = initX + pixelSize - stepSize;
    y = initY;
    direction = new Direction(LEFT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    ctx.stroke();
    x = initX + 3 * pixelSize - stepSize;
    y = initY;
    direction = new Direction(LEFT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral5(initX, initY, depth) {
    x = initX + 3 * pixelSize - stepSize;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral6(initX, initY, depth) {
    x = initX + 3 * pixelSize - stepSize;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral7(initX, initY, depth) {
    x = initX;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral8(initX, initY, depth) {
    x = initX + 3 * pixelSize - stepSize;
    y = initY + 2 * pixelSize - stepSize;
    direction = new Direction(LEFT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawNumeral9(initX, initY, depth) {
    x = initX + 2 * pixelSize;
    y = initY + 2 * pixelSize - stepSize;
    direction = new Direction(RIGHT);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    direction.turnLeft();
    forward();
    direction.turnLeft();
    drawRightCurve(depth);
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    direction.turnRight();
    forward();
    direction.turnRight();
    drawLeftCurve(depth);
    ctx.stroke();
}

function drawColon(initX, initY, depth) {
    x = initX;
    y = initY + 2 * pixelSize;
    direction = new Direction(UP);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawRightCurve(depth);
    ctx.stroke();
    x = initX;
    y = initY + 3 * pixelSize - stepSize;
    direction = new Direction(DOWN);
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawLeftCurve(depth);
    ctx.stroke();
}

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

function forward() {
    x += direction.xMultiplier * stepSize;
    y += direction.yMultiplier * stepSize;
    ctx.lineTo(x, y);
}
