const coracoes = document.querySelectorAll('img.base');
const telaEscondida = document.querySelector('.telaescondida');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

function janela(){
    telaEscondida.style.display = 'flex';
}