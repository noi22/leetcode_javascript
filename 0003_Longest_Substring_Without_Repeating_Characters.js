
var lengthOfLongestSubstring = function(s) {
    let maxCounter = 0;
    
    for (let i = 0; i < s.length; i++) {
       let currentCounter = 1;
       const apperedChar = [s[i]];
       let inc = 1;
       while (!apperedChar.includes(s[i + inc]) && inc < s.length - i) {
          apperedChar.push(s[i + inc]);
          currentCounter++;
          inc++;
       }
        
       if (currentCounter > maxCounter) maxCounter = currentCounter;
    }
    
    return maxCounter;
};