let number1 = parseInt(prompt("Ingresar el primer numero"))
let number2 = parseInt(prompt("Ingresar el segundo numero"))
let number3 = parseInt(prompt("Ingresar el tercer numero"))
const text = document.getElementById("text")

if(isNaN(number1) || isNaN(number2)){
    alert("el primer valor, segundo valor, tercer valor o todos los valores, no son un numero")
}
if(number1 && number2 && number3){
    if(number1 > number2 && number1 > number3){
        text.textContent = `"${number1}" es mayor que "${number2}" y "${number3}"`
    }else if(number2 > number1 && number2 > number3){
        text.textContent = `"${number2}" es mayor que "${number1}" y "${number3}"`
    }else if(number3 > number1 && number3 > number2){
        text.textContent = `"${number3}" es mayor que "${number1}" y "${number2}"`
    }else{
        text.textContent = `Los 3 valores son iguales`
    }
}