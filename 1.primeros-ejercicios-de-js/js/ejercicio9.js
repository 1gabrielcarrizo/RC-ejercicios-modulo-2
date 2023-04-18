let string = prompt("Ingresar una frase para contar las vocales").toLowerCase()
const text = document.getElementById("text")
let vocales = ""

if(!string || !isNaN(string)){
    alert("el valor ingresado no es un digito o se ingreso un string vacio")
}
if(string){
    for (let i = 0; i < string.length; i++) {
        let letra = string.charAt(i);
        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            vocales += letra
        }
    }
    text.textContent = `"${string}" contiene las siguientes vocales: "${vocales}"`
}