var vp = document.getElementById("villaPlatzi");
var drawerContext = vp.getContext("2d");

var tile = {
    url: "img/tile.png",
    loaded: false
};

var cow = {
    url: "img/cow.png",
    loaded: false
};
var pig = {
    url: "img/pig.png",
    loaded: false
};
var chick = {
    url: "img/chick.png",
    loaded: false
};

var cowQty = getRandom(5, 25);
var pigQty = getRandom(5, 25);
var chickQty = getRandom(5, 25);

tile.image = new Image();
tile.image.src = tile.url;
tile.image.addEventListener("load", loadTile);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

chick.image = new Image();
chick.image.src = chick.url;
chick.image.addEventListener("load", loadChick);


function getRandom(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function loadTile() {
    tile.loaded = true;
    draw();
}

function loadCow() {
    cow.loaded = true;
    draw();
}
function loadPig() {
    pig.loaded = true;
    draw();
}
function loadChick() {
    chick.loaded = true;
    draw();
}

function draw() {
    if (tile.loaded) {
        drawerContext.drawImage(tile.image, 0, 0);
    }
    if (cow.loaded) {

        for (var i = 0; i < cowQty; i++) {
            var x = getRandom(0, 7) * 60;
            var y = getRandom(0, 7) * 60;
            drawerContext.drawImage(cow.image, x, y);
        }
    }
    if (pig.loaded) {
        for (var i = 0; i < pigQty; i++) {
            var x = getRandom(0, 6) * 60;
            var y = getRandom(0, 6) * 60;
            drawerContext.drawImage(pig.image, x, y);
        }
    }
    if (chick.loaded) {
        for (var i = 0; i < chickQty; i++) {
            var x = getRandom(0, 5) * 60;
            var y = getRandom(0, 5) * 60;
            drawerContext.drawImage(chick.image, x, y);
        }
    }
}
