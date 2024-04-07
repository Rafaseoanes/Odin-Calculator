
let firtsNum = ""
let secondNum = ""
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

const buttons = document.getElementsByClassName("calButton")
const displayText = document.getElementById("displayText")


for (let button of buttons) {
    button.addEventListener("click", (e) => {
        updateDisplay(e)

    })
}

function updateDisplay(e) {

    if (e.target.value == "+" || e.target.value == "-" || e.target.value == "*" || e.target.value == "/") {
        operator = e.target.value
        console.log(operator)
        displayText.innerText += firtsNum

    } else if (operator == "") {
        firtsNum += e.target.value
        displayText.innerText = firtsNum
    } else {
        displayText.innerText = ""
        secondNum += e.target.value
        displayText.innerText = secondNum
        console.log(firtsNum, operator, secondNum)

    }

}

const clearKey = document.getElementById("clearKey")

clearKey.addEventListener("click", () => {
    firtsNum = ""
    secondNum = ""
    operator = ""
    displayText.innerText = ""
})

