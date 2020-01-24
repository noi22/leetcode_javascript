var intToRoman = function(num) {
    
    let result = '';
    
    if (num > 999) {
      if (Math.trunc(num / 1000) === 1) result += 'M';  
      if (Math.trunc(num / 1000) === 2) result += 'MM';
      if (Math.trunc(num / 1000) === 3) result += 'MMM';
        
      num %= 1000;
    }
    
    if (num > 99) {
      if (Math.trunc(num / 100) === 1) result += 'C';  
      if (Math.trunc(num / 100) === 2) result += 'CC';
      if (Math.trunc(num / 100) === 3) result += 'CCC';  
      if (Math.trunc(num / 100) === 4) result += 'CD';
      if (Math.trunc(num / 100) === 5) result += 'D';  
      if (Math.trunc(num / 100) === 6) result += 'DC';
      if (Math.trunc(num / 100) === 7) result += 'DCC';  
      if (Math.trunc(num / 100) === 8) result += 'DCCC';
      if (Math.trunc(num / 100) === 9) result += 'CM';
        
      num %= 100;
    }
    
    if (num > 9) {
      if (Math.trunc(num / 10) === 1) result += 'X';  
      if (Math.trunc(num / 10) === 2) result += 'XX';
      if (Math.trunc(num / 10) === 3) result += 'XXX';  
      if (Math.trunc(num / 10) === 4) result += 'XL';
      if (Math.trunc(num / 10) === 5) result += 'L';  
      if (Math.trunc(num / 10) === 6) result += 'LX';
      if (Math.trunc(num / 10) === 7) result += 'LXX';  
      if (Math.trunc(num / 10) === 8) result += 'LXXX';
      if (Math.trunc(num / 10) === 9) result += 'XC';
        
      num %= 10;
    }
    
      if (num === 1) result += 'I';  
      if (num === 2) result += 'II';
      if (num === 3) result += 'III';  
      if (num === 4) result += 'IV';
      if (num === 5) result += 'V';  
      if (num === 6) result += 'VI';
      if (num === 7) result += 'VII';  
      if (num === 8) result += 'VIII';
      if (num === 9) result += 'IX';  
    
    return result;
};