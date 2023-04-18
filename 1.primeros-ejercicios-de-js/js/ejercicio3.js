const buttonSumar = document.getElementById("buttonSumar")
const text = document.getElementById("text")

// OPCION 1 - funcion declarativa
// function suma(){
//     document.write("Hello World")
// }

// OPCION 2 - funcion anonima
// const suma = function(){
//     document.write("Hello World")
// }

// OPCION 3 - funcion de flecha
const suma = () => {
    text.innerText = `La suma de 3 + 5 es igual a: 8`
}

buttonSumar.addEventListener("click", suma)