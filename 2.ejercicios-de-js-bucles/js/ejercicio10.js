let fila = parseInt(prompt('Ingrese la cantidad la cantidad de filas'))
let columna = parseInt(prompt('Ingrese la cantidad la cantidad de columnas'))
let resultado = fila * columna
const text = document.getElementById("text")

if (isNaN(fila) || isNaN(columna)) {
    text.innerHTML += 'Las filas y/o columnas, no son numeros'
} else if (fila < 0 || columna < 0) {
    text.innerHTML += 'Las filas y/o columnas no pueden ser numeros negativos'
} else {
    for (let i = fila; i >= 1; i--) {
        for (let j = columna; j >= 1; j--) {
            text.innerHTML += resultado + '\t'
            resultado--
        }
        text.innerHTML += '<br>'
    }
}