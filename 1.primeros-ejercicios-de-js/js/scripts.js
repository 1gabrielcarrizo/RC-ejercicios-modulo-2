const footer = document.getElementById("footer")
const date = new Date().getFullYear()

const toggleTheme = document.getElementById("toggle-theme")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")
const nav = document.getElementById("nav")
const cards = Array.from(document.querySelectorAll(".card"))
const buttons = Array.from(document.querySelectorAll(".btn-outline-light"))

footer.innerHTML = `Copyright &copy; ${date} all rights reserved by <a
href="https://www.linkedin.com/in/1gabrielcarrizo/">Gabriel Carrizo</a>`

const changeTheme = () => {
    document.body.classList.toggle("dark")
    if(toggleIcon.classList.contains("fa-moon")){
        toggleIcon.classList.replace("fa-moon", "fa-sun")
        toggleText.textContent="Light mode"
        nav.classList.replace("navbar-dark", "navbar-light")
        nav.classList.replace("bg-dark", "bg-light")
        footer.classList.replace("bg-dark", "bg-light")
        cards.map(card => card.classList.remove("bg-dark"))
        buttons.map(button => button.classList.replace("btn-outline-light", "btn-outline-dark"))
    }else{
        toggleIcon.classList.replace("fa-sun", "fa-moon")
        toggleText.textContent="Dark mode"
        nav.classList.replace("navbar-light", "navbar-dark")
        nav.classList.replace("bg-light", "bg-dark")
        footer.classList.replace("bg-light", "bg-dark")
        cards.map(card => card.classList.add("bg-dark"))
        buttons.map(button => button.classList.replace("btn-outline-dark", "btn-outline-light"))
    }
}

toggleTheme.addEventListener("click", changeTheme)