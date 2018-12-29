var textLinesBox = document.getElementById("linesBox");
var sendBtn = document.getElementById("sendButton");
sendBtn.addEventListener("click", drawLineByClick);

var drawElement = document.getElementById("drawBox");
var drawArea = drawElement.getContext("2d");
var drawWidth = drawElement.width;
function drawLine(color, xStart, yStart, xFinal, yFinal) {
    drawArea.beginPath();
    drawArea.strokeStyle = color;
    drawArea.moveTo(xStart, yStart);
    drawArea.lineTo(xFinal, yFinal);
    drawArea.stroke();
    drawArea.closePath();
}

function drawLineByClick() {

    var lines = parseInt(textLinesBox.value);;
    var lineColor = "#FAA";
    var yi, xf;
    var multiFactor = drawWidth / lines;

    for (var currentLine = 0; currentLine < lines; currentLine++) {
        yi = multiFactor * currentLine;
        xf = multiFactor * (currentLine + 1);
        drawLine(lineColor, 0, yi, xf, drawWidth);
        drawLine(lineColor, yi, 0, drawWidth, xf);
        drawLine(lineColor, drawWidth, yi, drawWidth - xf, drawWidth);
        drawLine(lineColor, 0, drawWidth - yi, xf, 0);
        console.log("Line " + currentLine);
    }
var widthMinusOne = drawWidth -1;
    drawLine(lineColor, 1, 1, 1, widthMinusOne);
    drawLine(lineColor, 1, widthMinusOne, widthMinusOne, widthMinusOne);

    drawLine(lineColor, drawWidth, 0, 0, 0);
    drawLine(lineColor, drawWidth, 0, widthMinusOne, widthMinusOne);
}