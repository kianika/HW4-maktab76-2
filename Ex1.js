function exponent(a, n){
    if(n === 0){
        return 1;
    }
    if(n < 0){
        return 1/ a * exponent(a, n + 1);
    }
    else {
        return a * exponent(a, n - 1);
    }
}

console.log(exponent(2, -2));