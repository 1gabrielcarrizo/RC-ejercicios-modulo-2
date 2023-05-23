const text = document.getElementById("text")
const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")

const info = (string) => {
    if (string === string.toUpperCase()) {
        return text.textContent = `"${string}" esta formada por MAYUSCULAS`
    } else if (string === string.toLowerCase()) {
        return text.textContent = `"${string}" esta formada por MINUSCULAS`
    }
    return text.textContent = `"${string}" esta formada por MAYUSCULAS y MINUSCULAS`
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        const cadena = prompt("Ingresar una cadena de texto")
        isNaN(cadena) ? info(cadena) : text.textContent = `El valor ingresado no contiene caracteres`
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.innerHTML = ""
    }
}

btnShow.addEventListener("click", mostrarEjercicio)