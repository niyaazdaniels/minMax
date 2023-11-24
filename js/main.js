let input1 = document.getElementById('firstNumber')
let input2 = document.getElementById('secondNumber')
let btnShow = document.getElementById('calculate').addEventListener('click', minMax)

function minMax () {
    if(input2.value < input1.value){
        document.getElementById('output').innerText = `Max is  ${input1.value}, Min is ${input2.value}`
    }else if(input1.value < input2.value){
        document.getElementById('output').innerText = `Max is  ${input2.value}, Min is ${input1.value}`
    } else{
        document.getElementById('output').innerText = `Please Enter All Values`
    }
}