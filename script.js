console.log("hey")


// add
// subtract
// multiply
// divide

//.toFixed(5)
let firtsNum = 0
let secondNum = 0
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



const operate = (firtsNum, operator, secondNum) => {
    switch (operator) {
        case "+":
            console.log(add(firtsNum, secondNum))
            break;
        case "-":
            console.log(subtract(firtsNum, secondNum))
            break;
        case "*":
            console.log(multiply(firtsNum, secondNum))
            break;
        case "/":
            console.log(divide(firtsNum, secondNum))
            break;

    }
}

operate("53", "+", 6)
operate("53", "-", 6)
operate("53", "*", 6)
operate("53", "/", 6)