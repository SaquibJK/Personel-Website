const menu = document.querySelector("#menu");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle('toggle')
})

window.addEventListener("load", () => {
    menu.classList.remove("fa-times");
    header.classList.remove('toggle')
})