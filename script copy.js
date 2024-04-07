
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
    return parseInt(firtsUserInput) / parseInt(secondUserInput)

}



const operate = (firtsNum, operator, secondNum) => {
    switch (operator) {
        case "+":
            return add(firtsNum, secondNum)

        case "-":
            return subtract(firtsNum, secondNum)

        case "*":
            return multiply(firtsNum, secondNum)

        case "/":
            return divide(firtsNum, secondNum)


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
        // console.log(operator)

    } else if (operator == "") {
        firtsNum += e.target.value
        displayText.innerText = firtsNum
    } else {
        displayText.innerText = ""
        secondNum += e.target.value
        displayText.innerText = secondNum
        // console.log(firtsNum, operator, secondNum)

    }

}

const clearKey = document.getElementById("clearKey")

clearKey.addEventListener("click", () => {
    firtsNum = ""
    secondNum = ""
    operator = ""
    displayText.innerText = ""
})

const equalsKey = document.getElementById("equalsKey")

equalsKey.addEventListener("click", () => {
    let result = operate(firtsNum, operator, secondNum)
    // console.log(result)
    displayText.innerText = result
    // firtsNum = result

})
