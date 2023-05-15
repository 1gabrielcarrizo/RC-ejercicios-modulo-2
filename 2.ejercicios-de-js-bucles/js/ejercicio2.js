let nota = parseInt(prompt('Ingrese una nota entre 0-10'));
const text = document.getElementById("text")

if (isNaN(nota)) {
    text.textContent = 'El valor ingresado no es un numero'
} else {
    switch (nota) {
        case 0:
        case 1:
        case 2:
    text.textContent = `El valor introducido es ${nota} por lo tanto la nota es MUY DEFICIENTE`
            break;
        case 3:
        case 4:
            text.textContent = `El valor introducido es ${nota} por lo tanto la nota es INSUFICIENTE`
            break;
        case 5:
        case 6:
            text.textContent = `El valor introducido es ${nota} por lo tanto la nota es SUFICIENTE`
            break;
        case 7:
            text.textContent = `El valor introducido es ${nota} por lo tanto la nota es esta BIEN`
            break;
        case 8:
        case 9:
            text.textContent = `El valor introducido es ${nota} por lo tanto la nota es NOTABLE`
            break;
        case 10:
            text.textContent = `El valor introducido es ${nota} por lo tanto la nota es SOBRESALIENTE`
            break;
        default:
            text.textContent = `${nota} no se encuentra entre el rango de 0-10, por favor introduce un numero en ese rango`
    }
}