var maxArea = function(height) {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let currentArea = Math.min(height[i], height[j]) * (j - i);
            result = Math.max(result, currentArea);
        }
    }
    return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49);
console.log(maxArea([1,8]), 1);
console.log(maxArea([1,8,8]), 8);
console.log(maxArea([1,8,8,8,8,8]), 32);
console.log(maxArea([1,7,8,8,8,5]), 21);
console.log(maxArea([1,7,8,8,8,6]), 24);