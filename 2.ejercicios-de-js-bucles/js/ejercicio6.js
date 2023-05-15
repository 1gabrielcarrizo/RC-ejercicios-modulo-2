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

for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= 30; j++) {
        if (j <= i) {
            text.innerHTML += i
        }
    }
    text.innerHTML += '<br>'
}

bntShow.addEventListener("click", showText)