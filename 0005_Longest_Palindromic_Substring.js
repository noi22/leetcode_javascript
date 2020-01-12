
// Worked but Time Limit Exceeded
var longestPalindrome = function(s) {
    
    if (s.length <= 1) return s;
    
    const substrings = [];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
          substrings.push(s.slice(i, j));
        }
    }
    
    const palindromes = substrings.filter(substring => {
        return substring === substring.split("").reverse().join("");
    })
    
    return palindromes.reduce((maxPalindrome, currentPalindrome) => {
        return (maxPalindrome.length > currentPalindrome.length) ? maxPalindrome : currentPalindrome; 
    }, "")
    
};