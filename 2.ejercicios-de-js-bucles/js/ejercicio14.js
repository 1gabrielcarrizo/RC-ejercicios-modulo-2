let cadena = prompt('Ingrese un texto cualquiera')
let nuevaCadena = ''
const text = document.getElementById("text")

for (let letrita of cadena) {
    nuevaCadena += letrita + '-'
}
nuevaCadena = nuevaCadena.substring(0,nuevaCadena.length-1)
text.textContent = nuevaCadena