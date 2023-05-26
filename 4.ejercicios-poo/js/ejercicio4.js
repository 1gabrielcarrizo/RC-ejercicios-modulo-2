const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }
    imprimirDatos() {
        console.log("///////////////////")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Precio: $${this.precio}`)
        console.log(`Codigo: ${this.codigo}`)
    }
}

let productos = []

const agregarProducto = () => {
    // OPCION 1
    // for (let i = 0; i < 3; i++) {
    //     let nombre = prompt("Ingrese el nombre del producto")
    //     let precio = parseFloat(prompt("Ingrese el precio del producto"))
    //     let codigo = new Date().getTime()

    //     productos.push(new Producto(codigo, nombre, precio))
    // }
    // OPCION 2
    let posProd = 1
    while(productos.length<3){
        let nombre = prompt(`${posProd} - Ingrese el nombre del producto`)
        let precio = parseFloat(prompt(`${posProd} - Ingrese el precio del producto`))
        let codigo = new Date().getTime()

        if(nombre !== "" && !isNaN(precio)){
            productos.push(new Producto(codigo, nombre, precio))
            posProd++
        }
    }
}

const mostrarProductos = () => {
    // OPCION 1
    // for (let i = 0; i < productos.length; i++) {
    //     productos[i].imprimirDatos()
    //     console.log("estoy en la funcion mostrarProductos()")
    // }
    // OPCION 2
    // productos.forEach(producto => {
    //     producto.imprimirDatos()
    // });
    // OPCION 3
    for(let producto of productos){
        producto.imprimirDatos()
    }

}

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado'
        agregarProducto()
        mostrarProductos()
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
        productos = []
    }
}

btnShow.addEventListener("click", mostrarEjercicio)