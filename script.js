console.log("hey")


// add
// subtract
// multiply
// divide

//.toFixed(5)
let firtsNum = 0
let sencondNum = 0
let operator = ""

const add = function (firtsUserInput, secondUserInput) {
    return parseInt(firtsUserInput) + parseInt(secondUserInput)
}

const subtract = function (firtsUserInput, secondUserInput) {
    return parseInt(firtsUserInput) - parseInt(secondUserInput)
}

const multiply = function (firtsUserInput, secondUserInput) {
    return parseInt(firtsUserInput) * parseInt(secondUserInput)
}

const divide = function (firtsUserInput, secondUserInput) {
    let results = parseInt(firtsUserInput) / parseInt(secondUserInput)
    return results.toFixed(5)
}



const operate = (firtsNum, sencondNum, operator){
    
}

console.log(divide("53", 6))