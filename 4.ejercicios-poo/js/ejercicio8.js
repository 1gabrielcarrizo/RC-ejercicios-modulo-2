const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre,
        this.edad = edad,
        this.profesion = profesion
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}, tengo ${this.edad} y soy ${this.profesion}`)
    }

    despedirse(){
        console.log(`Un gusto conocerte, pero tengo que retirarme, me llamo ${this.nombre} por si te olvidaste`)
    }
}

let personas = []

const agregarPersona = () => {
    let pos = 1
    while(personas.length < 2){
        let nombre = prompt(`${pos} - Ingresa el nombre de la persona`)
        let edad = parseInt(prompt(`${pos} - Ingresa la edad de la persona`))
        let profesion = prompt(`${pos} - Ingresa la profesion de la persona`)

        if(nombre !== "" && !isNaN(edad) && profesion !== ""){
            personas.push(new Persona(nombre, edad, profesion))
            pos++
        }
    }
}

const mostrarPersona = () => {
    for(let persona of personas){
        persona.saludar()
    }
    console.log("/////////////")
    for(let persona of personas){
        persona.despedirse()
    }
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === "none") {
        showContainer.style.display = "block"
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado'
        agregarPersona()
        mostrarPersona()

    } else {
        showContainer.style.display = "none"
        btnShow.textContent = "Mostrar ejercicio"
        text.textContent = ""
        console.clear()
        personas = []
    }
}

btnShow.addEventListener("click", mostrarEjercicio)