let numberOne = document.getElementById("NumberOne")
let numberTwo = document.getElementById("NumberTwo")

function Sum(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) + parseFloat(numberTwo.value)
    some.innerHTML = `${numberOne.value} + ${numberTwo.value} = ${result}`
}

function Subtraction(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) - parseFloat(numberTwo.value)
    some.innerHTML = `${numberOne.value} - ${numberTwo.value} = ${result}`
}

function Multiplication(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) * parseFloat(numberTwo.value)
    some.innerHTML = `${numberOne.value} x ${numberTwo.value} = ${result}`
}

function Division(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) / parseFloat(numberTwo.value)
    some.innerHTML = `${numberOne.value} / ${numberTwo.value} = ${result}`
}

function Exponent(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) ** parseFloat(numberTwo.value)
    some.innerHTML = `${numberOne.value} ^ ${numberTwo.value} = ${result}`
}

function Percent(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) * (parseFloat(numberTwo.value)/100)
    some.innerHTML = `${numberTwo.value}% de ${numberOne.value} = ${result}`
}