let number = parseInt(prompt("Ingresar un numero"))
const text = document.getElementById("text")

if(isNaN(number)){
    alert("el valor ingresado no es un numero")
}
if(number){
    if(number % 2 === 0){
        text.textContent = `"${number}" es divisible por 2`
    }else{
        text.textContent = `"${number}" no es divisible por 2`

    }
}