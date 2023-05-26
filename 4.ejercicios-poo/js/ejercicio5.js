const btnShowExample = document.getElementById("btnShowExample")
const btnShow = document.getElementById("btnShow")
const showExample = document.getElementById("showExample")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anio) {
        this.nombre = nombre,
            this.edad = edad,
            this.dni = this.generarDNI(),
            this.sexo = sexo,
            this.peso = peso,
            this.altura = altura,
            this.anio = anio
    }

    mostrarGeneracion() {
        switch (true) {
            case this.anio >= 1930 && this.anio <= 1948:
                console.log(`${this.nombre} pertene a la generacion "Silent Generation" y su rasgo caracteristico es la "Austeridad"`)
                break;
            case this.anio >= 1949 && this.anio <= 1968:
                console.log(`${this.nombre} pertene a la generacion "Baby Boom" y su rasgo caracteristico es la "Ambicion"`)
                break;
            case this.anio >= 1969 && this.anio <= 1980:
                console.log(`${this.nombre} pertene a la generacion "X" y su rasgo caracteristico es la "Obsesion por el exito"`)
                break;
            case this.anio >= 1981 && this.anio <= 1993:
                console.log(`${this.nombre} pertene a la generacion "Y" y su rasgo caracteristico es la "Frustacion"`)
                break;
            case this.anio >= 1994 && this.anio <= 2010:
                console.log(`${this.nombre} pertene a la generacion "Z" y su rasgo caracteristico es la "Irreverencia"`)
                break;
            default:
                console.log(`${this.nombre} no pertenece a ninguna generacion de la tabla`)
                break;
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`)
        } else {
            console.log(`${this.nombre} no es mayor de edad`)
        }
    }

    mostrarDatos() {
        console.log("///////////////////")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`DNI: ${this.dni}`)
        console.log(`Sexo: ${this.sexo}`)
        console.log(`Peso: ${this.peso}`)
        console.log(`Altura: ${this.altura}`)
        console.log(`Año: ${this.anio}`)
    }

    generarDNI(){
        let dni = Math.round(Math.random() * (99999999 - 1)+1)
        return dni
    //     if(!this.dni){
    //         for (let i = 0; i < 8; i++) {
    //             let numerito = Math.round(Math.random()*9)
    //             this.dni += String(numerito)
    //         }
    //         console.log(`El DNI generado es: ${this.dni}`)
    //     }
    }
}

let personas = []

const agregarPersona = () => {
    let posProd = 1
    while(personas.length<3){
        let nombre = prompt(`${posProd} - Ingrese el nombre de la persona`)
        let edad = parseInt(prompt(`${posProd} - Ingrese la edad de la persona`))
        let sexo = prompt(`${posProd} - Ingrese el sexo de la persona ("H" para hombre y "M" para mujer)`).toUpperCase()
        let peso = parseFloat(prompt(`${posProd} - Ingrese el peso de la persona`))
        let altura = parseFloat(prompt(`${posProd} - Ingrese la altura de la persona`))
        let anio = parseInt(prompt(`${posProd} - Ingrese la fecha de nacimiento de la persona`))

        if(nombre !== "" && !isNaN(edad) && (sexo === "H" || sexo === "M") && !isNaN(peso) && !isNaN(altura) && !isNaN(anio)){
            personas.push(new Persona(nombre, edad, sexo, peso, altura, anio))
            posProd++
        }
    }
}

const mostrarPersona = () => {
    for(let persona of personas){
        persona.mostrarDatos()
    }
}

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

        text.textContent = 'Abrir la consola para ver el resultado'
        agregarPersona()
        mostrarPersona()
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
        personas = []
    }
}

btnShowExample.addEventListener("click", mostrarEjemplo)
btnShow.addEventListener("click", mostrarEjercicio)