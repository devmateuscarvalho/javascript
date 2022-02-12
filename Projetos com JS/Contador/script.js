const resultado = document.querySelector(".resultado");
const btnAumentar = document.querySelector(".aumentar");
const btnDiminuir = document.querySelector(".diminuir");
const btnResetar = document.querySelector('.resetar');

let contador = 0;
btnAumentar.addEventListener("click", function() {

    contador += 1;
    resultado.textContent = contador;
})

btnDiminuir.addEventListener("click", function() {
    contador -= 1;
    resultado.textContent = contador;
})
btnResetar.addEventListener("click", function() {
    contador = 0;
    resultado.textContent = "Clique para começar!";
})