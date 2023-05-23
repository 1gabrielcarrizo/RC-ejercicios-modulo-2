const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
const text = document.getElementById("text")

while (confirm('Quiere ingresar un DNI?')) {
    const dni = prompt('Introduce tu DNI');
    if (isNaN(parseInt(dni))) {
        alert('El valor ingresado no es un numero')
    } else if (dni.length === 8 && parseInt(dni) > 0) {
        text.innerHTML += `Tu DNI completo es ${dni}-${letras[dni % 23]}` + '<br>' 
    } else {
        alert('El numero de DNI tiene que tener 8 digitos y tiene que ser mayor que 0 y menor que 99999999')
    }
}