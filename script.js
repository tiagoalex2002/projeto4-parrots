let q = 3;
while ((q < 4) || (q > 14) || (q % 2 != 0)) {
    let quantidade = prompt("Com quantas cartas você quer jogar?");
    q = Number(quantidade);
}

const Cartas = [];
Cartas.push('bobrossparrot.gif');
Cartas.push('bobrossparrot.gif');
Cartas.push('explodyparrot.gif');
Cartas.push('explodyparrot.gif');
Cartas.push('fiestaparrot.gif');
Cartas.push('fiestaparrot.gif');
Cartas.push('metalparrot.gif');
Cartas.push('metalparrot.gif');
Cartas.push('revertitparrot.gif');
Cartas.push('revertitparrot.gif');
Cartas.push('tripletsparrot.gif');
Cartas.push('tripletsparrot.gif');
Cartas.push('unicornparrot.gif');
Cartas.push('unicornparrot.gif');

function comparador() {
    return Math.random
}

let i = 0;
const NumerodeCartas = []
while (i < q) {
    NumerodeCartas[i] = Cartas[i];
    NumerodeCartas.sort(comparador);
    i = i + 1;
}

let j = 0;
while (j < q) {
    const elemento = document.querySelector(".container-de-cartas");
    elemento.innerHTML += `
    <div data-test="card" onclick = "rotacionar(this)"class="carta">
        <div class="front-face face">
            <img data-test="face-down-image" class="back" src="imagens/back.png" alt="back">
        </div>
        <div class="back-face face">
            <img data-test="face-up-image" class="front" src="imagens/${NumerodeCartas[j]}" alt="bobrossparrot">
        </div>`
    j++;

}

let carta1;
let imagem1;
let carta2;
let imagem2;
let possui1;
let possui2;

function rotacionar(card) {
    const cartasViradas = [];
    const cartacerta = card.classList.contains('correto');
    const rotacionado = card.classList.contains('virado');
    if (cartacerta == false && rotacionado == true && timeout == true) {
        card.classList.add('virado');
        card.querySelector(".back-face").classList.toggle("girar-back-face");
        card.querySelector(".front-face").classList.toggle("girar-front-face");
        const seletor = document.querySelectorAll(".virado");
        let h = 0;

        while (h < seletor.lenght) {
            cartasViradas[h] = seletor[h];
            h++;
        }

        if (cartasViradas.length == 1) {
            carta1 = card;
            imagem1 = carta1.querySelector('.back-face img').src;
        }

        if (cartasViradas.length == 2) {
            carta2 = card;
            imagem2 = carta2.querySelector('.back-face img').src
        }

        const possui1 = carta1.classList.contains('virado');
        const possui2 = carta2.classList.contains('virado');
        if ()



    }
}



