 'use strict'
// Function Declaration


function calc(apple, orange, pineapple) {
    return apple + orange + pineapple
}
const result = calc(5, 5, 5)
console.log(result)



// Function Expression

let result2 = function(a, b, c) {
    return a + b - c
}

console.log(result2(10,4,2))