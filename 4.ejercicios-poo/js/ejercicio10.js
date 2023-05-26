const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Areropuerto {
    constructor(nombreAeropuerto, listaAviones = []) {
        this.nombreAeropuerto = nombreAeropuerto,
            this.listaAviones = listaAviones
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion)
    }

    buscarAvion(nombreAvion) {
        for (let avion of this.listaAviones) {
            if (avion.nombre === nombreAvion) {
                return avion;
            }
        }
        return null;
    }
}

class Avion {
    constructor(nombre, capacidad, destino, listaPasajeros = []) {
        this.nombre = nombre,
            this.capacidad = capacidad,
            this.destino = destino,
            this.listaPasajeros = listaPasajeros
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero)
            return console.log(`${pasajero} abordo el avion ${this.nombre} con destino a ${this.destino}`)
        } else {
            return console.log("Ya no hay espacio para abordar el avion")
        }
    }
}

const aeropuerto = new Areropuerto("Aeropuerto internacional")

const avion1 = new Avion("Avion 1", 100, "EEUU")
const avion2 = new Avion("Avion 2", 200, "Nueva Zelanda")
const avion3 = new Avion("Avion 3", 300, "Corea del Sur")

aeropuerto.agregarAvion(avion1)
aeropuerto.agregarAvion(avion2)
aeropuerto.agregarAvion(avion3)

const nombreABuscar = "Avion 2"

const mostrarEjercicio = () => {
    if (showContainer.style.display === "none") {
        showContainer.style.display = "block"
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado'

        // const aeropuerto = new Areropuerto("Aeropuerto internacional")
        // const avion1 = new Avion("Avion1", 100, "EEUU")
        // const avion2 = new Avion("Avion2", 200, "Nueva Zelanda")
        // const avion3 = new Avion("Avion3", 300, "Corea del Sur")
        // aeropuerto.agregarAvion(avion1)
        // aeropuerto.agregarAvion(avion2)
        // aeropuerto.agregarAvion(avion3)
        // const nombreABuscar = "Avion2"

        console.log(aeropuerto)
        // aeropuerto.buscarAvion(nombreABuscar)
        const avionEncontrado = aeropuerto.buscarAvion(nombreABuscar);

        if (avionEncontrado) {
            avionEncontrado.abordar("Pasajero X");
        } else {
            console.log(`No se encontró el avión ${nombreABuscar}.`);
        }
    } else {
        showContainer.style.display = "none"
        btnShow.textContent = "Mostrar ejercicio"
        text.textContent = ""
        console.clear()
    }
}

btnShow.addEventListener("click", mostrarEjercicio)