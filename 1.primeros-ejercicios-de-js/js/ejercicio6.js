let number1 = parseInt(prompt("Ingresar el primer numero"))
let number2 = parseInt(prompt("Ingresar el segundo numero"))
const text = document.getElementById("text")

if(isNaN(number1) || isNaN(number2)){
    alert("el primer valor, segundo valor, o ambos valores, no son un numero")
}
if(number1 && number2){
    if(number1 > number2){
        text.textContent = `El segundo numero (${number1}) es mayor que el primero (${number2})`
    }else if(number2 > number1){
        text.textContent = `El primer numero (${number2}) es mayor que el segundo (${number1})`
    }else{
        text.textContent = `Ambos numeros son iguales`
    }
}