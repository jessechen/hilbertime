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

class Command {
    constructor(x, y, line = true) {
        this.x = x;
        this.y = y;
        this.line = line;
    }

    execute() {
        if (this.line) {
            ctx.lineTo(this.x, this.y);
        } else {
            ctx.moveTo(this.x, this.y);
        }
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const initialDepth = 5;
const pixelSize = 128;
const stepSize = pixelSize / Math.pow(2, initialDepth);
const queue = [];
let shouldQueue = false;
let x, y, direction;
let segmentCount;
let prevTimestamp = null;

drawTime(32, 32, initialDepth);
function drawTime(initX, initY, depth) {
    let hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    if (hours > 12) {
        hours -= 12;
    }
    if (hours >= 10) {
        drawNumeral(1, initX - pixelSize + stepSize, initY, depth);
        drawNumeral(hours % 10, initX + 2 * pixelSize - stepSize, initY, depth);
        drawColon(initX + 6 * pixelSize - stepSize, initY, depth);
        drawNumeral(Math.floor(minutes / 10), initX + 8 * pixelSize - stepSize, initY, depth);
        drawNumeral(minutes % 10, initX + 12 * pixelSize - stepSize, initY, depth);
    } else {
        drawNumeral(hours % 10, initX, initY, depth);
        drawColon(initX + 4 * pixelSize - stepSize, initY, depth);
        drawNumeral(Math.floor(minutes / 10), initX + 6 * pixelSize - stepSize, initY, depth);
        shouldQueue = true;
        drawNumeral(minutes % 10, initX + 10 * pixelSize - stepSize, initY, depth);
        segmentCount = queue.length;
        window.requestAnimationFrame(drawQueue);
    }
}

function drawNumeral(numeral, initX, initY, depth) {
    switch (numeral) {
        case 0:
            drawNumeral0(initX, initY, depth);
            break;
        case 1:
            drawNumeral1(initX, initY, depth);
            break;
        case 2:
            drawNumeral2(initX, initY, depth);
            break;
        case 3:
            drawNumeral3(initX, initY, depth);
            break;
        case 4:
            drawNumeral4(initX, initY, depth);
            break;
        case 5:
            drawNumeral5(initX, initY, depth);
            break;
        case 6:
            drawNumeral6(initX, initY, depth);
            break;
        case 7:
            drawNumeral7(initX, initY, depth);
            break;
        case 8:
            drawNumeral8(initX, initY, depth);
            break;
        case 9:
            drawNumeral9(initX, initY, depth);
            break;
    }
}

function drawNumeral0(initX, initY, depth) {
    x = initX + 3 * pixelSize - stepSize;
    y = initY + pixelSize - stepSize;
    direction = new Direction(UP);
    ctx.beginPath();
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    x = initX + 3 * pixelSize - stepSize;
    y = initY + 3 * pixelSize;
    direction = new Direction(LEFT);
    move(x, y);
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
    move(x, y);
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
    x = initX + 3 * pixelSize - stepSize;
    y = initY;
    direction = new Direction(LEFT);
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    move(x, y);
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
    move(x, y);
    drawRightCurve(depth);
    x = initX;
    y = initY + 3 * pixelSize - stepSize;
    direction = new Direction(DOWN);
    move(x, y);
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
    if (shouldQueue) {
        queue.push(new Command(x, y, true));
    } else {
        ctx.lineTo(x, y);
    }
}

function move(newX, newY) {
    if (shouldQueue) {
        queue.push(new Command(newX, newY, false));
    } else {
        ctx.moveTo(newX, newY);
    }
}

function drawQueue(timestamp) {
    ctx.beginPath();
    if (prevTimestamp) {
        let deltaMillis = timestamp - prevTimestamp;
        drawSegments(Math.ceil(60000 / (segmentCount * deltaMillis)));
    } else {
        drawSegments(1);
    }
    prevTimestamp = timestamp;
    ctx.stroke();
    if (queue.length > 1) {
        window.requestAnimationFrame(drawQueue);
    }
}

function drawSegments(count) {
    for (let i = 0; i < count; i++) {
        const prevCommand = queue.shift();
        ctx.moveTo(prevCommand.x, prevCommand.y);
        const currCommand = queue[0];
        currCommand.execute();
    }
}
