let num
let acumulador = 0
const text = document.getElementById("text")

while (confirm('Quiere ingresar un numero?')) {
    num = parseInt(prompt('Ingrese un numero por favor'))
    if (isNaN(num)) {
        alert('El valor ingresado no es un numero')
    } else {
        acumulador += num
    }
}
text.textContent = `La suma total es ${acumulador}`