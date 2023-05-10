let palabrita = prompt('Introduce un texto').toLowerCase()
let posicion = 0
const text = document.getElementById("text")

for (let i = 0; i < palabrita.length; i++) {
    if (palabrita.charAt(i) === 'a' || palabrita.charAt(i) === 'e' || palabrita.charAt(i) === 'i' || palabrita.charAt(i) === 'o' || palabrita.charAt(i) === 'u') {
        posicion = i
        break
    }
}
text.textContent = `La primera vocal (${palabrita[posicion]}) se encuentra en la posicion ${posicion}`