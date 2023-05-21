const btnShowExample = document.getElementById("btnShowExample")
const btnShow = document.getElementById("btnShow")
const showExample = document.getElementById("showExample")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")
const text2 = document.getElementById("text2")
const ul = document.getElementById("ul")

let ciudades = []

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
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        while(confirm("Quiere agregar una ciudad?")){
            const ciudad = prompt("Ingrese el nombre de una ciudad")
    
            if(isNaN(ciudad)){
                ciudades.push(ciudad)
            }else{
                alert("La ciudad ingresada contiene solamente numeros o se ingreso un string null...")
            }
        }
        text.innerHTML = `El arreglo de ciudades tiene: ${ciudades.length} elementos <br>
        En la posicion 1 se encuentra la ciudad "${ciudades[0]}", en la posicion 3 se encuentra "${ciudades[2]}" y en la ultima posicion se encuentra "${ciudades[ciudades.length - 1]}"<br>`
        ciudades.push("Paris")
        text2.innerHTML = `Se agrego un ultimo elemento al arreglo: ${ciudades[ciudades.length - 1]}<br>
        En la posicion 2 se encuentra la ciudad "${ciudades[1]}"<br>
        Se sustituyo "${ciudades[1]}" por "Barcelona", quedando el siguiente arreglo definitivo: <br>`
        ciudades.splice(1,1, "Barcelona")
        const fragment = document.createDocumentFragment()
        for (const ciudacita of ciudades) {
            const li = document.createElement("LI")
            li.textContent = ciudacita
            li.classList.add("text-left")
            fragment.appendChild(li)
        }
        ul.appendChild(fragment)
        console.log(ciudades)
        ciudades = []
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        ul.textContent = ""
    }
}

btnShowExample.addEventListener("click", mostrarEjemplo)
btnShow.addEventListener("click", mostrarEjercicio)