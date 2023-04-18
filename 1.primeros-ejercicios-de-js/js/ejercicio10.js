let number = parseInt(prompt("Ingresar un numero para ver si es divisible por 2, 3, 5 o 7"))
const text = document.getElementById("text")

if(isNaN(number)){
    alert("el valor ingresado no es un numero")
}
if(number){
    if(number % 2 === 0){
        text.textContent = `${number} es divisible por 2`
    }else if(number % 3 === 0){
        text.textContent = `${number} es divisible por 3`
    }else if(number % 5 === 0){
        text.textContent = `${number} es divisible por 5`
    }else if(number % 7 === 0){
        text.textContent = `${number} es divisible por 7`
    }else{
        text.textContent = `${number} no es divisible por ninguno de los numeros mencionados`
    }
}