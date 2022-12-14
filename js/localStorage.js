const contenedor = document.getElementById('container-saludo');
const boton = document.getElementById('submitname');
const loader = document.getElementById('loader');
const containerLoad = document.getElementById('container-load');



/* LOCAL STORAGE SALUDO USUARIO*/

const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");


form.addEventListener("submit", function (e) {
    e.preventDefault();
});

submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});


forgetBtn.addEventListener("click", function () {
    localStorage.removeItem("nombre");
    nameDisplayCheck();
});

/* FINAL SALUDO USUARIO*/