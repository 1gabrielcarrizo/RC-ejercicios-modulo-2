let texto = ''
let sinGuionAlFinal
const text = document.getElementById("text")

while (confirm('Quiere ingresar una palabra?')) {
    texto += prompt('Ingrese una palabra') + '-'
}
console.log(texto.length)
console.log(texto.charAt(texto.length-1))
sinGuionAlFinal = texto.substring(0,texto.length-1)
text.textContent = sinGuionAlFinal