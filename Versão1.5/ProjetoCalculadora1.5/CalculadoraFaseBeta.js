let numberOne = document.getElementById("NumberOne")
let numberTwo = document.getElementById("NumberTwo")

function Sum(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) + parseFloat(numberTwo.value)
    some.innerHTML = `A soma dos números resulta em: ${result}`
}

function Subtraction(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) - parseFloat(numberTwo.value)
    some.innerHTML = `A subtração dos números resulta em: ${result}`
}

function Multiplication(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) * parseFloat(numberTwo.value)
    some.innerHTML = `A multiplicação dos números resulta em: ${result}`
}

function Division(){
    let some = document.getElementById("answer")
    let result = parseFloat(numberOne.value) / parseFloat(numberTwo.value)
    some.innerHTML = `A divisão dos números resulta em: ${result}`
}
