
function giveMoneyAway() {
    var moneyText = document.getElementById("requested");
    var res = document.getElementById("result");
    var money = parseInt(moneyText.value);
    var withdrawed = [];
    res.innerHTML = "";
    var bills = 0;

    for (var bi of cashList) {

        if (money > 0) {
            var div = Math.floor(money / bi.value);
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
    if (money > 0) {
        res.innerHTML = "No enough money";
    } else {
        for (var w of withdrawed) {
            if (w.quantity > 0) {
                res.innerHTML += w.quantity + " Bills of $" + w.value + "<img src=\"" + w.imageUrl + "\"/>" + "<br/>";
                substractBillsFromCash(w.value, w.quantity);
            }
        }
    }
}

function substractBillsFromCash(billValue, qty) {
    for (var cash of cashList) {
        if (cash.value == billValue) {
            cash.quantity -= qty;
            break;
        }
    }
}

var cashList = [];
cashList.push(new Bill(100, 10));
cashList.push(new Bill(50, 10));
cashList.push(new Bill(20, 30));
cashList.push(new Bill(10, 2));
cashList.push(new Bill(5, 2));
cashList.push(new Bill(2, 2));
cashList.push(new Bill(1, 2));

var getMoneyButton = document.getElementById("giveMoney");
getMoneyButton.addEventListener("click", giveMoneyAway);