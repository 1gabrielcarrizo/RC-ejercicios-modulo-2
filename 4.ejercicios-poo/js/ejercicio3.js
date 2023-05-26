const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Figura {
    constructor(base, altura) {
        this.base = base,
            this.altura = altura
    }
    modificarBase(nuevaBase) {
        this.base = nuevaBase
    }
    modificarAltura(nuevaAltura) {
        this.altura = nuevaAltura
    }
    calcularPerimetro() {
        console.log(`El perimetro es: ${2 * (this.base + this.altura)}`)
    }
    calcularArea() {
        console.log(`El area es: ${this.base * this.altura}`)
    }
}

let rec1 = new Figura(4,4)
let rec2 = new Figura(1,2)

const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado, por ejemplo, escribe "rec1.modificarBase(num), rec1.modificarAltura(num), rec1.calcularPerimetro() o rec1.calcularArea()"'
        console.log(rec1)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
    }
}

btnShow.addEventListener("click", mostrarEjercicio)