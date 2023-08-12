const coracoes = document.querySelectorAll('img.base');
const telaEscondida = document.querySelector('.telaescondida');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

const patos = document.querySelectorAll('img.pato');

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
                },3000);
            break;
            case false:
                patos[1].classList.add('animacao-p2');
                setTimeout(()=>{
                    patos[1].classList.remove('animacao-p2');
                    controle = true;
                },3000);
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

patos[0].addEventListener('click', ()=>{fecharJanela()});
patos[1].addEventListener('click', ()=>{fecharJanela()});