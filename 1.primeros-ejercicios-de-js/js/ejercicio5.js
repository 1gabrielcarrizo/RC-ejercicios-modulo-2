let number1 = parseInt(prompt("Ingresar el primer numero"))
let number2 = parseInt(prompt("Ingresar el segundo numero"))
const text = document.getElementById("text")

if(isNaN(number1) || isNaN(number2)){
    alert("el primer valor, segundo valor, o ambos valores, no son un numero")
}
if(number1 && number2){
    alert(`La suma de "${number1}" + "${number2}" da como resultado: "${number1 + number2}"`)
}