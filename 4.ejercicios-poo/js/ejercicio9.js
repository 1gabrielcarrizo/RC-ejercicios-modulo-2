const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
    emitirSonido() {
        console.log("Un animal que emite un sonido")
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }
    superEmitirSonido() {
        this.emitirSonido()
    }

    emitirSonido() {
        console.log("Woof")
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }
    superEmitirSonido() {
        this.emitirSonido()
    }

    emitirSonido() {
        console.log("Meow")
    }
}

let animales = []
const perro = new Perro("Sumo", 4)
const gato = new Gato("Minino", 3)
animales.push(perro, gato)

// const agregarAnimal = () => {
//     let pos = 1
//     while (animales.length < 2) {
//         if (pos === 1) {
//             let nombre = prompt(`${pos} - Ingresa el nombre del perro`)
//             let edad = parseInt(prompt(`${pos} - Ingresa la edad del perro`))

//             if (nombre !== "" && !isNaN(edad)) {
//                 animales.push(new Animal(nombre, edad))
//                 pos++
//             }
//         }else{
//             let nombre = prompt(`${pos} - Ingresa el nombre del gato`)
//             let edad = parseInt(prompt(`${pos} - Ingresa la edad del gato`))

//             if (nombre !== "" && !isNaN(edad)) {
//                 animales.push(new Animal(nombre, edad))
//                 pos++
//             }
//         }
//     }
// }

// const mostrarAnimal = () => {
//     for (let animal of animales) {
        
//     }
// }

const mostrarEjercicio = () => {
    if (showContainer.style.display === "none") {
        showContainer.style.display = "block"
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado'
        // agregarAnimal()
        // mostrarAnimal()
        console.log(animales)
        perro.emitirSonido()
        gato.emitirSonido()
    } else {
        showContainer.style.display = "none"
        btnShow.textContent = "Mostrar ejercicio"
        text.textContent = ""
        console.clear()
        // animales = []
    }
}

btnShow.addEventListener("click", mostrarEjercicio)