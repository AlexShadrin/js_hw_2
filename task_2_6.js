function add(arg1, arg2) {
    return arg1 + arg2;
}

function sub(arg1, arg2) {
    return arg1 - arg2;
}

function mul(arg1, arg2) {
    return arg1 * arg2;
}

function div(arg1, arg2) {
    return arg1 / arg2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return div(arg1, arg2);
    }
}

console.log(mathOperation(1, 2, '*'));