const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

let auto = {
    color: 'Blanco',
    marca: 'Toyota',
    modelo: 2022,
    encendido: false,
    // OPCION 1 - funcion tradicional
    encenderApagar: function () {
        this.encendido = !this.encendido
        if (this.encendido) {
            console.log("el auto esta encendido")
            console.log("funcion tradicional")
        } else {
            console.log("el auto esta apagado")
            console.log("funcion tradicional")
        }
    }
    // OPCION 2 -funcion de flecha
    // encenderApagar: () => {
    //     auto.encendido = !auto.encendido
    //     if(auto.encendido){
    //         console.log("el auto esta encendido")
    //         console.log("funcion de flecha")
    //     }else{
    //         console.log("el auto esta apagado")
    //         console.log("funcion de flecha")
    //     }
    // }
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado, por ejemplo, escribe "auto.encenderApagar()"'
        console.log(auto)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
    }
}

btnShow.addEventListener("click", mostrarEjercicio)