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




let q = 3;
while ((q < 4) || (q > 14) || (q % 2 != 0)) {
    let quantidade = prompt("Com quantas cartas você quer jogar?");
    q = Number(quantidade);
}



function comparador() {
    return Math.random() - 0.5;
}

let i = 0;
const NumerodeCartas = [];
while (i < q) {
    NumerodeCartas[i] = Cartas[i];
    i++;
}
NumerodeCartas.sort(comparador);

let j = 0;
while (j < q) {
    const elemento = document.querySelector(".container-de-cartas");
    elemento.innerHTML += `
    <div data-test="card" onclick = "rotacionar(this)" class="carta">
        <div class="front-face face">
            <img data-test="face-down-image" class="back" src="imagens/back.png">
        </div>
        <div class="back-face face">
            <img data-test="face-up-image" class="front" src="imagens/${NumerodeCartas[j]}">
        </div>`
    j++;

}

let cartaum;
let cartadois;
let nomeimgum;
let nomeimgdois;
let timeout = true;
let jogadas = 0;
function rotacionar(carta) {
    const cartasViradas = [];
    jogadas++;
    const cartacorreta = carta.classList.contains('correto');
    const temvirado = carta.classList.contains('virado');
    if (cartacorreta == false && timeout == true && temvirado == false) {
        carta.classList.add('virado');
        carta.querySelector(".back-face").classList.toggle("girar-back-face");
        carta.querySelector(".front-face").classList.toggle("girar-front-face");
        const selectorall = document.querySelectorAll('.virado');
        let cont3 = 0;
        while (cont3 < selectorall.length) {
            cartasViradas[cont3] = selectorall[cont3];
            cont3++;
        }
        if (cartasViradas.length == 1) {
            cartaum = carta;
            nomeimgum = cartaum.querySelector('.back-face img').src;
        }
        else if (cartasViradas.length == 2) {
            cartadois = carta;
            nomeimgdois = cartadois.querySelector('.back-face img').src;
        }
        const contemum = cartaum.classList.contains('virado');
        const contemdois = cartadois.classList.contains('virado');
        if (cartasViradas.length == 2 && nomeimgum !== nomeimgdois) {
            cartasViradas.length = 0;
            cartaum.classList.remove('virado');
            cartadois.classList.remove('virado');
            timeout = false;
            setTimeout(() => {
                cartaum.querySelector(".back-face").classList.toggle("girar-back-face");
                cartaum.querySelector(".front-face").classList.toggle("girar-front-face");
                cartadois.querySelector(".back-face").classList.toggle("girar-back-face");
                cartadois.querySelector(".front-face").classList.toggle("girar-front-face");
                timeout = true;
            }, 1000);
        }
        else if (cartasViradas.length == 2) {
            cartasViradas.length = 0;
            cartaum.classList.add('correto');
            cartadois.classList.add('correto');
            cartaum.classList.remove('virado');
            cartadois.classList.remove('virado');
        }
        (document.querySelectorAll('.correto'));
        console.log(timeout);
    }
    const fimdejogo = document.querySelectorAll('.correto');
    if (fimdejogo.length == q) {
        alert(`Você ganhou em ${jogadas} jogadas!`)

    }
}




