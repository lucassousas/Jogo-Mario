const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaoCano <= 123 && posicaoCano > 0 && posicaoMario < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);