const num = document.querySelectorAll('button')
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')

num.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value

        if(value === '='){
            if(display.innerText.includes('/')) {
                const splitStuff = display.innerText.split('/')
                operate('/', splitStuff[0], splitStuff[1])
            }
            if(display.innerText.includes('*')) {
                const splitStuff = display.innerText.split('*')
                operate('*', splitStuff[0], splitStuff[1])
            }
            if(display.innerText.includes('+')) {
                const splitStuff = display.innerText.split('+')
                operate('+', splitStuff[0], splitStuff[1])
            }
            if(display.innerText.includes('-')) {
                const splitStuff = display.innerText.split('-')
                operate('-', splitStuff[0], splitStuff[1])
            }
        }
        display.innerText += value
    })
})

clear.addEventListener('click', () => {
    display.innerText = ''
})

const operate = (operator,numOne,numTwo) => {
    const valueOne = Number(numOne)
    const valueTwo = Number(numTwo)
    if(operator === '/'){
        display.textContent = valueOne / valueTwo
    }
    if (operator === '+'){
        display.textContent = valueOne + valueTwo
    }
    if (operator === '*'){
        display.textContent = valueOne * valueTwo
    }
    if (operator === '-'){
        display.textContent = valueOne - valueTwo
    }
}






/* //basic math
const add = (a , b) => {
    return a + b
}

const subtract = (a , b) => {
    return a - b
}

const multiply = (a , b) => {
    return a * b
}

const divide = (a , b) => {
    return a / b
}
//valuables stored
let firstNumber = ''
let operatorValue = ''
let secondNumber = '' */


//function takes an operator and 2 numbers and then calls one of the above functions on the numbers
/* const operate = (operator , numOne, numTwo) => {
    if (operator === '+') {
        return add(numOne,numTwo)
    } else if (operator === '-') {
        return subtract(numOne,numTwo)
    } else if (operator === '*') {
        return multiply(numOne,numTwo)
    } else if (operator === '/') {
        return divide(numOne,numTwo)
    }
} */




