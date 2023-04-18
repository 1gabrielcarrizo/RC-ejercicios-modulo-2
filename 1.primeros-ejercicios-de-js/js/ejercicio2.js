const buttonText = document.getElementById("buttonText")

// OPCION 1 - funcion declarativa
// function showText(){
//     document.write("Hello World")
// }

// OPCION 2 - funcion anonima
// const showText = function(){
//     document.write("Hello World")
// }

// OPCION 3 - funcion de flecha
const showText = () => {
    document.write("Hello World")
}

buttonText.addEventListener("click", showText)