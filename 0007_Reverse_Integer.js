var reverse = function(x) {
    let absolute = +String(Math.abs(x)).split('').reverse().join(''); 

    if (absolute > Math.pow(2, 31) - 1) return 0; 
    return (x >= 0) ? absolute : -absolute;
};


console.log(reverse(-1234383478378));
console.log(reverse(123));
console.log(reverse(-120));
console.log(reverse(120001));
console.log(reverse(0));
