const text = document.getElementById("text")
const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")

const parOImpar = (numero) => {
    numero % 2 === 0 ? text.textContent = `"${numero}" es par` : text.textContent = `"${numero}" es impar`
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"
        
        const number = parseInt(prompt("Ingresar un numero para saber si par o impar"))
        isNaN(number) ? text.textContent = 'El valor ingresado no es un numero' : parOImpar(number)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.innerHTML = ""
    }
}

btnShow.addEventListener("click", mostrarEjercicio)