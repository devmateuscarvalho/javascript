const leoes = [{
        id: 1,
        nome: "Rei Leão",
        img: "assets/rei-leao.jpg",

        texto: "Eu sou o rei leão que vim da terra dos leões e mando na selva inteira, caso goste vote em mim"
    }, {
        id: 2,
        nome: "Leãozão",
        img: "assets/leaozao.jpg",
        texto: "Eu sou o leãozao e nada pode me parar",
    },
    {
        id: 3,
        nome: "Master Lion",
        img: "assets/master-lion.jpg",
        texto: "Eu sou o MasterLion e vocês devem me temer!!",
    }
];

//pegando os itens da pagin
const imgLeao = document.getElementById('fotoLeao')
const nomeLeao = document.getElementById('nomeLeao')
const textLeao = document.getElementById('textoLeao')
const btnVoltar = document.getElementById('btnvoltar')
const btnProximo = document.getElementById('btnproximo')
const btnAleatorio = document.getElementById('btnsurprise')
    //definindo leão atual
contadorLeao = 0;

//carregar leão inicial
window.addEventListener("DOMContentLoaded", function() {
    const leao = leoes[contadorLeao];
    imgLeao.src = leao.img;
    nomeLeao.textContent = leao.nome;
    textLeao.textContent = leao.texto;
});

// mostrar leão baseado no item
function mostrarLeao(contadorLeao) {
    const mateus = leoes[contadorLeao];
    imgLeao.src = mateus.img;
    nomeLeao.textContent = mateus.nome;
    textLeao.textContent = mateus.texto;
};


//mostrar proximo leão
btnProximo.addEventListener("click", function() {
    contadorLeao++;
    if (contadorLeao > leoes.length - 1) {
        contadorLeao = 0;
    }
    mostrarLeao(contadorLeao);

});

// mostrar leão anterior
btnVoltar.addEventListener("click", function() {
    contadorLeao--;
    if (contadorLeao < 0) {
        contadorLeao = leoes.length - 1;
    }
    mostrarLeao(contadorLeao);
});
// mostrar leão aleatório

btnAleatorio.addEventListener("click", function() {

    contadorLeao = Math.floor(Math.random() * leoes.length);
    mostrarLeao(contadorLeao);
})