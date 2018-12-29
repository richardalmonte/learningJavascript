document.addEventListener("keydown", drawByKey);
var keyList = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var box = document.getElementById("drawArea");
var drawer = box.getContext("2d");
var currentPosX = 250;
var currentPosY = 250;

drawLine("red", currentPosX - 1, currentPosY - 1, currentPosX + 1, currentPosY + 1, drawer);

function drawByKey(sender) {
    var color = "blue";
    var move = 10;
    var pos_x;
    var pos_y;
    switch (sender.keyCode) {
        case keyList.LEFT:
            pos_x = currentPosX - move;
            pos_y = currentPosY;
            break;
        case keyList.UP:
            pos_y = currentPosY - move;
            pos_x = currentPosX;
            break;
        case keyList.RIGHT:
            pos_x = currentPosX + move;
            pos_y = currentPosY;
            break;
        case keyList.DOWN:
            pos_y = currentPosY + move;
            pos_x = currentPosX;
            break;
        default:
            // pos_y = currentPosY + 1;
            // pos_x = currentPosX + 1;
            break;
    }

    drawLine(color, currentPosX, currentPosY, pos_x, pos_y, drawer);
    currentPosX = pos_x;
    currentPosY = pos_y;
}

function drawLine(color, xStart, yStart, xFinal, yFinal, drawerArea) {
    drawerArea.beginPath();
    drawerArea.strokeStyle = color;
    drawerArea.lineWidth = 3;
    drawerArea.moveTo(xStart, yStart);
    drawerArea.lineTo(xFinal, yFinal);
    drawerArea.stroke();
    drawerArea.closePath();
}
