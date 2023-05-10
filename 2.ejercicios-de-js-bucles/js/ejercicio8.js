let numerito = parseInt(prompt('Ingrese un numero entre [1-50]'))
const text = document.getElementById("text")

if (isNaN(numerito)) {
    text.textContent = 'El valor ingresado no es un numero'
} else if (numerito < 1 || numerito > 50) {
    text.textContent = 'El numero ingresado no se encuentra en el rango de [1-50]'
} else {
    for (let i = 1; i <= numerito; i++) {
        let k = 1
        for (let j = 1; j <= numerito; j++) {
            if (j <= i) {
                text.innerHTML += k++
            }
        }
        text.innerHTML += '<br>'
    }
}