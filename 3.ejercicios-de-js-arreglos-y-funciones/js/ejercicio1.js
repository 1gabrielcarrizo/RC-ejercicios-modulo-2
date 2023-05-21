const btnShowExample = document.getElementById("btnShowExample")
const btnShow = document.getElementById("btnShow")
const showExample = document.getElementById("showExample")
const showContainer = document.getElementById("showContainer")
const ul = document.getElementById("ul")

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

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
    // document.write('<ul>')
    // for (const mes of meses) {
    //     document.write(`<li>${mes}</li>`)
    // }
    // document.write('</ul>')

    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        const fragment = document.createDocumentFragment()
        for (const mes of meses) {
            const li = document.createElement("LI")
            li.textContent = mes
            li.classList.add("text-left")
            fragment.appendChild(li)
        }
        ul.appendChild(fragment)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        ul.textContent = ""
    }
}

btnShowExample.addEventListener("click", mostrarEjemplo)
btnShow.addEventListener("click", mostrarEjercicio)