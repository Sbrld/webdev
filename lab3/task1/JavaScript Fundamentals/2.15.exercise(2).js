let a = +prompt("Enter num1");
let b = +prompt("Enter num2");

function min(a, b) {
    if(a < b) {
        return a;
    }
    else {
        return b;
    }
}

alert(min(a, b));