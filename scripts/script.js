const coracoes = document.querySelectorAll('img.base');
const telaEscondida = document.querySelector('.telaescondida');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

const patos = document.querySelectorAll('img.pato');
const saida = document.querySelector('.sair');

let controle = true;

const janela = () => {
    telaEscondida.style.display = 'flex';
    loop();
}

const loop = () => {
    this.loop = setInterval(()=>{
        switch(controle){
            case true:
                patos[0].classList.add('animacao-p1');
                setTimeout(()=>{
                    patos[0].classList.remove('animacao-p1');
                    controle = false;
                },4000);
            break;
            case false:
                patos[1].classList.add('animacao-p2');
                setTimeout(()=>{
                    patos[1].classList.remove('animacao-p2');
                    controle = true;
                },4000);
            break;
        }
    },500);
}

function fecharJanela() {
    telaEscondida.style.display = 'none';
    clearInterval(this.loop);
    patos[0].classList = 'pato pato-a';
    patos[1].classList = 'pato pato-b';
    controle = true;
}

saida.addEventListener('click', ()=>{fecharJanela()});

const gato = document.querySelector('img.gato');
const secaoImg = document.querySelector('.img');
const telaDentro = document.querySelector('.teladentro');

const reproduzirAudio = (caminho, parent) => {
    const audio = document.createElement('audio');
    audio.setAttribute('controls','');
    audio.setAttribute('autoplay','');
    audio.setAttribute('class', 'audios');
    audio.src = caminho;
    parent.appendChild(audio);

    setTimeout(()=>{
        parent.removeChild(audio);
    }, 1000);
}

gato.addEventListener('click', ()=>{
    reproduzirAudio('audio/audio.mp3', secaoImg);
});

telaDentro.addEventListener('click', ()=>{
    reproduzirAudio('audio/audio.mp3', telaDentro);
});