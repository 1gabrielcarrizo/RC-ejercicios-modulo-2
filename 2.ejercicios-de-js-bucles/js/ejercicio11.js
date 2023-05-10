let nombre1 = prompt('Ingrese el nombre de la persona 1').toLowerCase()
let edad1 = parseInt(prompt('Ingrese la edad de la persona 1'))

let nombre2 = prompt('Ingrese el nombre de la persona 2').toLowerCase()
let edad2 = parseInt(prompt('Ingrese la edad de la persona 2'))

let nombre3 = prompt('Ingrese el nombre de la persona 3').toLowerCase()
let edad3 = parseInt(prompt('Ingrese la edad de la persona 3'))

const text = document.getElementById("text")

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
    text.textContent = 'La edad 1, 2 o 3 no es un numero'
} else if (edad1 == edad2 || edad1 == edad3) {
    text.textContent = '2 o mas personas tienen la misma edad'
} else if (edad1 <= 0 || edad2 <= 0 || edad3 <= 0) {
    text.textContent = 'La edad no puede ser menor o igual que 0'
} else if (edad1 > edad2 && edad1 > edad3) {
    text.textContent = `${nombre1} [${edad1}] es mayor que ${nombre2} [${edad2}] y ${nombre3} [${edad3}]`
} else if (edad2 > edad3) {
    text.textContent = `${nombre2} [${edad2}] es mayor que ${nombre1} [${edad1}] y ${nombre3} [${edad3}]`
} else {
    text.textContent = `${nombre3} [${edad3}] es mayor que ${nombre1} [${edad1}] y ${nombre2} [${edad2}]`
}