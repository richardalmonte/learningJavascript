var vp = document.getElementById("villaPlatzi");
var drawerContext = vp.getContext("2d");

var mapTileImg = "img/tile.png";

var mapControl = new Image();
mapControl.src = mapTile
mapControl.addEventListener("load", draw);


var cowControl = new Image();
cowControl.src = "img/cow.png";
cowControl.addEventListener("load", draw);

var pigControl = new Image();
pigControl.src = "img/pig.png"
pigControl.addEventListener("load", draw);


var chickControl = new Image();
chickControl.src = "img/chick.png"
chickControl.addEventListener("load", draw);


function getRandom(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function draw() {
    drawerContext.drawImage(mapControl, 0, 0);
}