var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let result = "";
    const step = 2 * numRows - 2;
    
    for (let i = 0; i < numRows; i++) {
        for(let j = i; j < s.length; j += step) {
            result += s[j];
            let inner = j + step - 2 * i;
            
            if(i !== 0 && i !== numRows - 1 && inner < s.length) {
                result += s[inner]; 
            }
        }
    }
    
    return result;
};