var drawElement = document.getElementById("drawBox");
var drawArea = drawElement.getContext("2d");

var lines = 30;
var lineColor = "#FAA";
var yi, xf;

for (var currentLine = 0; currentLine < lines; currentLine++) {
    yi = 10 * currentLine;
    xf = 10 * (currentLine + 1);
    drawLine(lineColor, 0, yi, xf, 300);
    drawLine(lineColor, yi, 0, 300, xf);
    drawLine(lineColor, 300, yi, 300 - xf, 300);
    drawLine(lineColor, 0, 300- yi, xf, 0);
    console.log("Line " + currentLine);
}

drawLine(lineColor, 1, 1, 1, 299);
drawLine(lineColor, 1, 299, 299, 299);

drawLine(lineColor, 300, 0, 0, 0);
drawLine(lineColor, 300, 0, 299, 299);


function drawLine(color, xStart, yStart, xFinal, yFinal) {
    drawArea.beginPath();
    drawArea.strokeStyle = color;
    drawArea.moveTo(xStart, yStart);
    drawArea.lineTo(xFinal, yFinal);
    drawArea.stroke();
    drawArea.closePath();
}
