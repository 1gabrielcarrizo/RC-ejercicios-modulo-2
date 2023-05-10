const palabra = prompt('Introduce un texto').toLocaleLowerCase()
const text = document.getElementById("text")

let vocales = 0

for (const letra of palabra) {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        vocales++
    }
}
text.textContent = `Tu palabra tiene ${palabra.length} letras en total (contando tambien los espacios) y contiene ${vocales} vocales`