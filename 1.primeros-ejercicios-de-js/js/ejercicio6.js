let number1 = parseInt(prompt("Ingresar el primer numero"))
let number2 = parseInt(prompt("Ingresar el segundo numero"))
const text = document.getElementById("text")

if(isNaN(number1) || isNaN(number2)){
    alert("el primer valor, segundo valor, o ambos valores, no son un numero")
}else if(number1 > number2){
    text.textContent = `El primer numero (${number1}) es mayor que el segundo (${number2})`
}else if(number2 > number1){
    text.textContent = `El segundo numero (${number2}) es mayor que el primero (${number1})`
}else{
    text.textContent = `Ambos numeros son iguales`
}