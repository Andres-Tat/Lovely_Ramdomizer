 'use strict'
// Function Declaration
function calc(apple, orange, pineapple) {
    
    return apple + orange + pineapple
}

const result = calc('false', 5, 'false')

console.log(result)



// Function Expression

let result2 = function(a, b, c) {
    return a + b - c
}

console.log(result2(10,4,2))
