const btnShow = document.getElementById("btnShow")
const showContainer = document.getElementById("showContainer")
const text = document.getElementById("text")

class Libro {
    constructor(isbn, titulo, autor, numPag) {
        this.isbn = isbn,
            this.titulo = titulo,
            this.autor = autor,
            this.numPag = numPag
    }
    getISBN() {
        return this.isbn
    }

    getTitulo() {
        return this.titulo
    }

    getAutor() {
        return this.autor
    }

    getNumPag() {
        return this.numPag
    }

    setISBN(isbn) {
        this.isbn = isbn
    }

    setTitulo(titulo) {
        this.titulo = titulo
    }

    setAutor(autor) {
        this.autor = autor
    }

    setNumPag(numPag) {
        this.numPag = numPag
    }

    mostrarLibro() {
        console.log("///////////////////")
        console.log(`El libro "${this.titulo}" con ISBN [${this.isbn}] creado por el/la autor/a "${this.autor}" tiene ${this.numPag} páginas`)
    }

    compararPaginas(libro) {
        if (this.numPag > libro.numPag) {
            let cantidadPagDif = this.numPag - libro.numPag
            return console.log(`el libro "${this.titulo}" tiene ${cantidadPagDif} paginas mas que el libro "${libro.titulo}"`)
        } else if (this.numPag < libro.numPag) {
            let cantidadPagDif = libro.numPag - this.numPag
            return console.log(`el libro "${libro.titulo}" tiene ${cantidadPagDif} paginas mas que el libro "${this.titulo}"`)
        }
        return console.log("ambos libros tienen la misma cantidad de paginas")
    }
}

let libros = []
const libro1 = new Libro('978-3-16-148410-0', 'HTML', 'Juan Campos', 150)
const libro2 = new Libro('872-1-10-165719-3', 'CSS', 'Flor Rodriguez', 200)
libros.push(libro1, libro2)

// const agregarLibro = () => {
//     let posProd = 1
//     while(libros.length<2){
//         let isbn = parseInt(prompt(`${posProd} - Ingrese el isbn del libro`))
//         let titulo = prompt(`${posProd} - Ingrese el titulo del libro`)
//         let autor = prompt(`${posProd} - Ingrese el autor del libro`)
//         let numPag = parseInt(prompt(`${posProd} - Ingrese el numero de pagina del libro`))

//         if(!isNaN(isbn) && titulo !== "" && autor !== "" && !isNaN(numPag)){
//             libros.push(new Libro(isbn, titulo, autor, numPag))
//             posProd++
//         }
//     }
// }

// libro1.mostrarLibro()
// libro2.mostrarLibro()

// const showBooks = () => {
//     for (let libro of libros) {
//         libro.mostrarLibro()
//     }
// }


const mostrarEjercicio = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        btnShow.textContent = "Ocultar ejercicio"

        text.textContent = 'Abrir la consola para ver el resultado, por ejemplo, poner libro1.compararPaginas(libro2)'
        // agregarLibro()
        // const libro1 = new Libro('978-3-16-148410-0', 'HTML', 'Juan Campos', 150)
        // const libro2 = new Libro('872-1-10-165719-3', 'CSS', 'Flor Rodriguez', 200)
        // libros.push(libro1, libro2)
        console.log(libros)
    } else {
        showContainer.style.display = 'none';
        btnShow.textContent = 'Mostrar ejercicio';
        text.textContent = ""
        console.clear()
        // libros = []
    }
}

btnShow.addEventListener("click", mostrarEjercicio)