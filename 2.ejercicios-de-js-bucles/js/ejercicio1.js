let edad = parseInt(prompt('Ingresar una edad'));
const text = document.getElementById("text")

if (isNaN(edad)) {
    text.textContent = 'El valor ingresado no es un numero'
} else if (edad > 18) {
    text.textContent = `${edad} es mayor que 18, por lo tanto puede conducir`
} else if (edad == 18) {
    text.textContent = 'El valor ingresado es igual a 18, por lo tanto puede conducir'
} else {
    text.textContent = `${edad} es menor que 18, por lo tanto no puede conducir`
}