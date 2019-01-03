var images = [];
images["Cauchin"] = "img/cow.png";
images["Pokacho"] = "img/chick.png";
images["Tocinauro"] = "img/pig.png";

var pakimanList = [];
pakimanList.push(new Pakiman("Cauchin", 100, 30));
pakimanList.push(new Pakiman("Pokacho", 80, 50));
pakimanList.push(new Pakiman("Tocinauro", 120, 40));

// the "Of" for type have been introduced in JavaScript version  Emac_2015
for (var pakiman of pakimanList) {
    pakiman.show();
}