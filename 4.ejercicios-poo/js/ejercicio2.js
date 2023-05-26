const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Cuenta {
    constructor(nombre, saldo = 0) {
        this.nombre = nombre,
            this.saldo = saldo
    }
    // OPCION 1 - funcion tradicional
    ingresar(dinero) {
        if (dinero > 0) {
            this.saldo += dinero
        } else {
            console.error("El monto tiene que ser mayor que 0")
        }
        this.informar()
    }
    extraer(dinero) {
        if (dinero > this.saldo || dinero < 0) {
            console.error("Monto invalido o saldo insuficiente")
        } else {
            this.saldo -= dinero
        }
        this.informar()
    }
    informar() {
        console.log(`La cuenta a nombre de "${this.nombre}" tiene un saldo de ${this.saldo}`)
    }

    // OPCION 2 - funcion anonima
    // ingresar = function(dinero){
    //     if(dinero>0){
    //         cuenta1.saldo += dinero
    //     }else{
    //         console.error("El monto tiene que ser mayor que 0")
    //     }
    //     this.informar()
    // }
    // extraer = function(dinero){
    //     if(dinero > cuenta1.saldo || dinero < 0){
    //         console.error("Monto invalido o saldo insuficiente")
    //     }else{
    //         cuenta1.saldo -= dinero
    //     }
    //     this.informar()
    // }
    // informar = function(){
    //     console.log(`La cuenta a nombre de "${cuenta1.nombre}" tiene un saldo de ${cuenta1.saldo}`)
    // }

    // OPCION 3 - funcion de flecha
    // ingresar = (dinero) => {
    //     if(dinero>0){
    //         this.saldo += dinero
    //     }else{
    //         console.error("El monto tiene que ser mayor que 0")
    //     }
    //     this.informar()
    // }
    // extraer = (dinero) => {
    //     if(dinero > this.saldo || dinero < 0){
    //         console.error("Monto invalido o saldo insuficiente")
    //     }else{
    //         this.saldo -= dinero
    //     }
    //     this.informar()
    // }
    // informar = () => {
    //     console.log(`La cuenta a nombre de "${this.nombre}" tiene un saldo de ${this.saldo}`)
    // }
}

let cuenta1 = new Cuenta("Alex", 150000)

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado, por ejemplo, escribe "cuenta1.ingresar(numero), cuenta1.extraer(numero) o cuenta1.informar()"'
        console.log(cuenta1)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
    }
}

btnShow.addEventListener("click", mostrarEjercicio)