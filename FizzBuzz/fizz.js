var maxNumber = 100;

for (var i = 1; i <= maxNumber; i++) {
    const element = maxNumber;;
    var value = i;
    if (isDivisible(i, 3)) {
        value = "Fizz";
    }
    if (isDivisible(i, 5)) {
        value = "Buzz";
    }

    if (isDivisible(i, 3) && isDivisible(i, 5)) {
        value = "FizzBuzz";
    }
    document.write(value + "<br />");
}

function isDivisible(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}