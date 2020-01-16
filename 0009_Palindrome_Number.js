
// convert to string
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    reversedx =x.toString().split('').reverse().join('');
    
    return (x.toString() === reversedx);
};

// not convert to string 

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedNumber = 0;
    while(x > reversedNumber) {
      reversedNumber = reversedNumber * 10 + x % 10;
      x = Math.trunc(x / 10);
    }

    return x === reversedNumber || x === Math.trunc(reversedNumber / 10);
}
