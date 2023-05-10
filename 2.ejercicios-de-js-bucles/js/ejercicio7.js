let number = parseInt(prompt('Ingrese un numero entre [1-50]'))
const text = document.getElementById("text")

if (isNaN(number)) {
    text.textContent = 'El valor ingresado no es un numero'
} else if (number < 1 || number > 50) {
    text.textContent = 'El numero ingresado no se encuentra en el rango de [1-50]'
} else {
    for (let i = number; i >= 1; i--) {
        for (let j = number; j >= 1; j--) {
            if (j <= i){
                text.innerHTML += i
            }
        }
        text.innerHTML += '<br>'
    }
}