const btnShowExample = document.getElementById("btnShowExample")
const btnShow = document.getElementById("btnShow")
const showExample = document.getElementById("showExample")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")
const tableBody = document.getElementById("table_body")

let resultado = []

const mostrarEjemplo = () => {
    if (showExample.style.display === 'none') {
        showExample.style.display = 'block'
        btnShowExample.textContent = "Ocultar ejemplo"
    } else {
        showExample.style.display = 'none';
        btnShowExample.textContent = 'Mostrar ejemplo';
    }
}

const mostrarEjercicio = () => {
    tableBody.innerHTML = ''
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        for (let i = 0; i < 50; i++) {
            let dado1 = Math.round(Math.random() * (6 - 1) + 1)
            let dado2 = Math.round(Math.random() * (6 - 1) + 1)

            let suma = dado1 + dado2
            
            // Añadir la suma al array de resultados
            if (resultado[suma] === undefined) {
                resultado[suma] = 1;
            } else {
                resultado[suma]++;
            }
        }
        for (let j = 2; j <= 12; j++) {
            let tr = document.createElement("TR")
            let celda = `<td scope="row">${j}</td>
            <td scope="row">${resultado[j] || 0}</td>`
            tr.innerHTML = celda
            tableBody.appendChild(tr)
        }
        resultado = []
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
    }
}

btnShowExample.addEventListener("click", mostrarEjemplo)
btnShow.addEventListener("click", mostrarEjercicio)