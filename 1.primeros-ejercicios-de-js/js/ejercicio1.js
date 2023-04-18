const buttonAlert = document.getElementById("buttonAlert")

// OPCION 1 - funcion declarativa
// function showAlert(){
//     alert("Un mensaje")
// }

// OPCION 2 - funcion anonima
// const showAlert = function(){
//     alert("Un mensaje")
// }

// OPCION 3 - funcion de flecha
const showAlert = () => {
    alert("Un mensaje")
}

buttonAlert.addEventListener("click", showAlert)