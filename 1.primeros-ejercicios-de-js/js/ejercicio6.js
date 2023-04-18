let number1 = parseInt(prompt("Ingresar el primer numero"))
let number2 = parseInt(prompt("Ingresar el segundo numero"))
const text = document.getElementById("text")

if(isNaN(number1) || isNaN(number2)){
    alert("el primer valor, segundo valor, o ambos valores, no son un numero")
}
if(number1 && number2){
    if(number1 > number2){
        text.textContent = `"${number1}" es mayor que "${number2}"`
    }else if(number2 > number1){
        text.textContent = `"${number2}" es mayor que "${number1}"`
    }else{
        text.textContent = `Ambos numeros son iguales`
    }
}