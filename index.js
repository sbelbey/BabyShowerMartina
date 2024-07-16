// To open and close modal
const btnInfo = document.getElementById("info-btn");
const modal = document.getElementById("elModal");
const cerrar = document.getElementById("cerrar");

// To open and close modal sections
const dondeBtn = document.getElementById("donde-btn");
const horaBtn = document.getElementById("hora-btn");
const listaBtn = document.getElementById("lista-btn");

const dondeEs = document.getElementById("donde-es");
const queHora = document.getElementById("que-hora");
const noRegales = document.getElementById("no-regales");
const volverAtras = document.getElementById("volver-atras");

const confirm = document.getElementById("confirm");

// Función para abrir y cerrar el modal
btnInfo.onclick = function () {
    modal.style.display = "flex";
};

cerrar.onclick = function () {
    modal.style.display = "none";
    dondeBtn.style.display = "block";
    horaBtn.style.display = "block";
    listaBtn.style.display = "block";
    confirm.style.display = "block";
    dondeEs.style.display = "none";
    queHora.style.display = "none";
    noRegales.style.display = "none";
    volverAtras.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Boton volver atras
volverAtras.onclick = function () {
    volverAtras.style.display = "none";
    dondeEs.style.display = "none";
    queHora.style.display = "none";
    noRegales.style.display = "none";
    horaBtn.style.display = "block";
    listaBtn.style.display = "block";
    dondeBtn.style.display = "block";
    confirm.style.display = "block";
};

// Función para abrir y cerrar el donde es
dondeBtn.onclick = function () {
    horaBtn.style.display = "none";
    listaBtn.style.display = "none";
    confirm.style.display = "none";
    dondeEs.style.display = "block";
    volverAtras.style.display = "block";
};

//Funcion para abrir y cerrar a que hora
horaBtn.onclick = function () {
    dondeBtn.style.display = "none";
    listaBtn.style.display = "none";
    confirm.style.display = "none";
    queHora.style.display = "block";
    volverAtras.style.display = "block";
};

//Funcion para abrir y cerrar a que hora
listaBtn.onclick = function () {
    dondeBtn.style.display = "none";
    horaBtn.style.display = "none";
    confirm.style.display = "none";
    noRegales.style.display = "block";
    volverAtras.style.display = "block";
};
