let num = +prompt("Enter the num");
let power = +prompt("Enter a power for num");

function pow(num, power) {
    let res = num;
    let i = 1;

    while (i < power) {
        res *= num;
        i++;
    }

    return res;
}

if(power < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
}
else {
    alert(pow(num, power));
}