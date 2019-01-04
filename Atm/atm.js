class Bill {
    constructor(val, qty) {
        this.value = val;
        this.quantity = qty;
    }
}

function giveMoneyAway() {
    var moneyText = document.getElementById("requested");
    money = parseInt(moneyText.value);

    for (var bi of cashList) {
        console.log(bi);
        if (money > 0) {
            div = Math.floor(money / bi.value);
            if (div > bi.quantity) {
                bills = bi.quantity;
            }
            else {
                bills = div;
            }
            withdrawed.push(new Bill(bi.value, bills));
            money = money - (bi.value * bills);
        }
    }
    var res = document.getElementById("result");
    if (money > 0) {
        res.innerHTML = "No enough money";
    } else {
        for (var w of withdrawed) {
            if (w.value > 0) {
                res.innerHTML += w.quantity + " Bills of $" + w.value + "<br/>";
            }
        }
    }
}

var cashList = [];
var withdrawed = [];

cashList.push(new Bill(50, 10));
cashList.push(new Bill(20, 30));
cashList.push(new Bill(10, 2));

var money = 0;
var div = 0;
var bills = 0;

var getMoneyButton = document.getElementById("giveMoney");
getMoneyButton.addEventListener("click", giveMoneyAway);