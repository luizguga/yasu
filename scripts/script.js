const coracoes = document.querySelectorAll('img.base');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

function janela(){
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = '#530182de';
    document.body.appendChild(div);

    let divDentro = document.createElement('div');
    divDentro.style.position = 'relative';
    divDentro.style.width = '100%';
    divDentro.style.height = '100%';
    divDentro.style.display = 'flex';
    divDentro.style.justifyContent = 'center';
    divDentro.style.alignItems = 'center';
    div.appendChild(divDentro);

    let imgPatoUm = document.createElement('img');
    imgPatoUm.src = 'imagens/pato-1.png';
    imgPatoUm.style.position = 'absolute';

    let secao = document.createElement('section');
    secao.style.width = '60%';
    secao.style.textAlign = 'justify';
    divDentro.appendChild(secao);

    let para1 = document.createElement('p');
    para1.textContent = 'Parabéns Yasmin Christinne! Feliz Aniversário!';
    secao.appendChild(para1);

}