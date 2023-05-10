let nombre = prompt("Por favor ingresa un nombre de usuario")
const text = document.getElementById("text")

if(nombre === "" || !isNaN(nombre)){
    alert("Se ingreso una cadena vacia, digitos o se cancelo")
}else{
    alert(`Hola ${nombre}`)
}

console.log(typeof nombre)
console.log(nombre)