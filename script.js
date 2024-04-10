
//Main variables for the calculator:
let firtsNum = ""
let secondNum = ""
let operator = ""

//Main functions for each operation:
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


//This is the principal funtion wich takes each value and operate based on the operator variable:
const operate = (firtsNum, operator, secondNum) => {

    switch (operator) {
        case "+":
            return add(firtsNum, secondNum)

        case "-":
            return subtract(firtsNum, secondNum)

        case "*":
            return multiply(firtsNum, secondNum)

        case "/":
            if (secondNum == "0") {

                return "Oooops!!"
            }
            return divide(firtsNum, secondNum)


    }
}

//wiring of the buttons in the front end with the back end:
const buttons = document.getElementsByClassName("calButton")
const displayText = document.getElementById("displayText")


for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let value = e.target.value
        updateDisplay(value)

    })
}


//The updateDisplay function handles the display of the calculator when a button is pressed
function updateDisplay(value) {

    if (value == "+" || value == "-" || value == "*" || value == "/") {
        if (firtsNum && secondNum && operator) {
            // console.log(firtsNum, secondNum, operator)
            getResults()
        }
        operator = value
        // console.log(operator)

    } else if (operator == "") {
        firtsNum += value
        displayText.innerText = firtsNum
    } else {
        displayText.innerText = ""
        secondNum += value
        displayText.innerText = secondNum
        // console.log(firtsNum, operator, secondNum)

    }

}

//Funtionality for the clearKey Button:
const clearKey = document.getElementById("clearKey")

clearKey.addEventListener("click", () => {
    firtsNum = ""
    secondNum = ""
    operator = ""
    displayText.innerText = ""
})

const equalsKey = document.getElementById("equalsKey")

equalsKey.addEventListener("click", getResults)

const backspace = document.getElementById("backspace")

backspace.addEventListener("click", () => {
    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1)
        displayText.innerText = secondNum
    } else {
        firtsNum = firtsNum.slice(0, -1)
        displayText.innerText = firtsNum
    }

})

function getResults() {
    let result = operate(firtsNum, operator, secondNum)
    // console.log(result)
    displayText.innerText = result
    if (result == "Oooops!!") {
        firtsNum = "0"
        secondNum = ""
        operator = ""
    } else {

        firtsNum = result
        secondNum = ""
        operator = ""
    }
}