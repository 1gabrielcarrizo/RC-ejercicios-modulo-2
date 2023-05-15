const text = document.getElementById("text")
const bntShow = document.getElementById("bntShow")
const showContainer = document.getElementById("showContainer")

const showText = () => {
    if (showContainer.style.display === 'none') {
        showContainer.style.display = 'block'
        bntShow.textContent = "Ocultar ejercicio"
    } else {
        showContainer.style.display = 'none';
        bntShow.textContent = 'Mostrar ejercicio';
    }
}

for (let i = 1; i <= 500; i++) {
    if (i % 4 === 0 && i % 9 === 0 && i % 5 === 0) {
        text.innerHTML += `${i} (multiplo de 4 y de 9)` + '<br>————————————————————<br>'
    } else if (i % 4 === 0 && i % 9 === 0) {
        text.innerHTML += `${i} (multiplo de 4 y de 9)` + '<br>'
    } else if (i % 4 === 0 && i % 5 === 0) {
        text.innerHTML += `${i} (multiplo de 4)` + '<br>————————————————————<br>'
    } else if (i % 4 === 0) {
        text.innerHTML += `${i} (multiplo de 4)` + '<br>'
    } else if (i % 9 === 0 && i % 5 === 0) {
        text.innerHTML += `${i} (multiplo de 9)` + '<br>————————————————————<br>'
    } else if (i % 9 === 0) {
        text.innerHTML += `${i} (multiplo de 9)` + '<br>'
    } else if (i % 5 === 0) {
        text.innerHTML += `${i}` + '<br>————————————————————<br>'
    } else {
        text.innerHTML += `${i}` + '<br>'
    }
}

bntShow.addEventListener("click", showText)