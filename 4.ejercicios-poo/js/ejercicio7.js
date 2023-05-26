const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre,
        this.telefono = telefono
    }
    getNombre() {
        return this.nombre
    }
    getTelefono() {
        return this.telefono
    }
    info() {
        return `Nombre: ${this.nombre}, Telefono: ${this.telefono}`
    }
}

let agendaContacto
let tamañoAgenda

// FUNCION PARA AÑADIR CONTACTO
const aniadirContacto = () => {
    if (agendaContacto.length >= tamañoAgenda.length) {
        console.log("No se puede añadir mas contactos")
    } else {
        let nombre = prompt("Ingrese el nombre del contacto").toLowerCase()
        let telefono = parseInt(prompt("Ingrese el telefono del contacto"))
        if (nombre !== '' && isNaN(nombre) && !isNaN(telefono)) {
            agendaContacto.push(new Contacto(nombre, telefono))
        }
    }
}

//FUNCION PARA SABER SI EXISTE O NO EL CONTACTO
const existeContacto = () => {
    if (agendaContacto.length < 1) {
        console.log('No hay contactos a mostrar, intente agendar a 1 persona')
    } else {
        let contactoExiste
        do {
            contactoExiste = prompt('Escriba el nombre de la persona para saber si existe entre sus contacos').toLowerCase()
        } while (!isNaN(contactoExiste) || contactoExiste === '')
        let encontrado = false
        for (const existe of agendaContacto) {
            if (existe.getNombre() === contactoExiste) {
                encontrado = true
            }
        }
        if (encontrado) {
            console.log(`"${contactoExiste}" se encuentra entre sus contactos`)
        } else {
            console.log(`"${contactoExiste}" no existe entre sus contactos`)
        }
    }
}

//FUNCION LISTAR CONTACTOS
const listarContactos = () => {
    if (agendaContacto.length < 1) {
        console.log('No hay contactos a mostrar, intente agendar a 1 persona')
    } else {
        for (let contacto of agendaContacto) {
            console.log(contacto.info())
        }
        console.log('------------------------------------------------------')
    }
}

// FUNCION BUSCAR CONTACTO POR NOMBRE Y MOSTRAR SU TELEFONO
const buscarContacto = () => {
    if (agendaContacto.length < 1) {
        console.log('No hay contactos a mostrar, intente agendar a 1 persona')
    } else {
        let nombreXTelefono
        do {
            nombreXTelefono = prompt('Escriba el nombre de la persona a buscar, para mostrar su numero telefonico').toLowerCase()
        } while (!isNaN(nombreXTelefono) || nombreXTelefono === '')
        let encontrado = false
        let obtenerTelefono
        for (let tel of agendaContacto) {
            if (tel.getNombre() === nombreXTelefono) {
                encontrado = true
                obtenerTelefono = tel.getTelefono()
            }
        }
        if (encontrado) {
            console.log(`${nombreXTelefono} tiene el siguiente numero telefonico: ${obtenerTelefono}`)
        } else {
            console.log(`No pudimos encontrar su numero telefonico porque "${nombreXTelefono}" no existe en sus contactos`)
        }
    }
}

//FUNCION PARA ELIMINAR A UN CONTACTO
const eliminarContacto = () => {
    if (agendaContacto.length < 1) {
        console.log('No hay contactos para eliminar')
    } else {
        let eliminarUsuario
        do {
            eliminarUsuario = prompt('Escriba el nombre de la persona para eliminarla de sus contactos').toLowerCase()
        } while (!isNaN(eliminarUsuario) || eliminarUsuario === '')
        let encontrado = false
        let eliminarPersona
        for (const eliminar of agendaContacto) {
            if (eliminar.getNombre() === eliminarUsuario) {
                encontrado = true
                eliminarPersona = agendaContacto.indexOf(eliminar)
                agendaContacto.splice(eliminarPersona, 1)
            }
        }
        if (encontrado) {
            console.log(`"${eliminarUsuario}" ha sido eliminado/a de sus contactos`)
        } else {
            console.log(`No pudimos eliminar a "${eliminarUsuario}" porque no existe entre sus contactos`)
        }
    }
}

//FUNCION PARA SABER SI LA AGENDA ESTA LLENA
const agendaLlena = () => {
    if (agendaContacto.length === tamañoAgenda) {
        console.log('La agenda se encuentra llena')
    } else {
        console.log('La agenda no se encuentra llena')
    }
}

//FUNCION PARA SABER SI HAY ESPACIO DISPONIBLE EN LA AGENDA
const huecosLibres = () => {
    if (agendaContacto.length < tamañoAgenda) {
        console.log(`Queda(n) ${tamañoAgenda - agendaContacto.length} espacio(s) disponible(s)`)
    } else {
        console.log('Ya no queda espacio para seguir agendando')
    }
}

const menu = () => {
    do {
        agendaContacto = [] // aqui se guardaran los nombres y telefonos
        tamañoAgenda = parseInt((prompt('Ingrese el limite de contactos que desee agendar (Ingrese "1" como minimo)')))
    } while (isNaN(tamañoAgenda) || tamañoAgenda <= 0)
    
    while (true) {
        let option = prompt('BIENVENIDO/A, INGRESE UNA OPCION\n1- Añadir contacto\n2- Consultar si existe el contacto\n3- Listar toda la agenda\n4- Buscar por nombre y mostrar su numero telefonico\n5- Eliminar contacto\n6- Consultar si la agenda esta llena\n7- Consultar cuantos contactos podemos agregar\nPARA SALIR, HAGA CLIC EN CANCELAR')
    
        if (option === null)
            break
    
        option = parseInt(option)
        if (isNaN(option)) {
            console.log('El codigo ingresado no es un numero...')
        } else {
            switch (option) {
                case 1:
                    aniadirContacto()
                    break;
                case 2:
                    existeContacto()
                    break;
                case 3:
                    listarContactos()
                    break;
                case 4:
                    buscarContacto()
                    break;
                case 5:
                    eliminarContacto()
                    break;
                case 6:
                    agendaLlena()
                    break;
                case 7:
                    huecosLibres()
                    break;
                default:
                    console.log('Digite un numero entre el 1-7')
            }
        }
    }
}

const mostrarEjercicio = () => {
    if (showContainer.style.display === "none") {
        showContainer.style.display = "block"
        btnShow.textContent = "Ocultar ejercicio"
        text.textContent = 'Abrir la consola para ver el resultado'
        menu()

    } else {
        showContainer.style.display = "none"
        btnShow.textContent = "Mostrar ejercicio"
        text.textContent = ""
        console.clear()
    }
}

btnShow.addEventListener("click", mostrarEjercicio)