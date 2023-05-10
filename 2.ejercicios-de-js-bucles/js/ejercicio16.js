let texto = prompt('Introduce un texto')
let nuevoTexto = ''
const text = document.getElementById("text")

for (let textito of texto) {
    nuevoTexto = textito + nuevoTexto
}
text.textContent = nuevoTexto