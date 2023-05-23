const text = document.getElementById("text")
const tableBody = document.getElementById("table_body")
const btnShow = document.getElementById("btnShow")

const tablaMultiplicar = (numero) => {
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("TR")
        let celda = `<td scope="row">${numero}</td>
        <td scope="row">x</td>
        <td scope="row">${i + 1}</td>
        <td scope="row">=</td>
        <td scope="row">${numero * (i + 1)}</td>`
        tr.innerHTML = celda
        tableBody.appendChild(tr)
    }
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        const number = parseInt(prompt("Ingresar un numero para ver su tabla de multiplicar"))
        isNaN(number) ? text.textContent = "El valor ingresado no es un numero" : tablaMultiplicar(number)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        tableBody.innerHTML = ""
    }
}

btnShow.addEventListener("click", mostrarEjercicio)