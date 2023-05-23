const text = document.getElementById("text")
const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")


const perimetroRectangulo = (b, h) => {
    let p = 2 * (b + h)
    return text.textContent = `El perimetro del rectangulo con base "${b}" y altura "${h}" es: "${p}"`
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"
        
        const base = parseInt(prompt("Ingresar la base del rectangulo"))
        const altura = parseInt(prompt("Ingresar la altura del rectangulo"))

        !isNaN(base) && !isNaN(altura) ? perimetroRectangulo(base, altura) : text.textContent = `1 o los 2 valores no son numeros`
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.innerHTML = ""
    }
}

btnShow.addEventListener("click", mostrarEjercicio)