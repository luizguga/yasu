const coracoes = document.querySelectorAll('img.base');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

function janela(){
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100vw';
    div.style.height = '100vh';
    div.style.backgroundColor = '#530182de';
    document.body.appendChild(div);

    let divDentro = document.createElement('div');
    divDentro.style.position = 'relative';
    divDentro.style.width = '100%';
    divDentro.style.height = '100%';
    divDentro.style.display = 'flex';
    divDentro.style.justifyContent = 'center';
    divDentro.style.alignItems = 'start';
    div.appendChild(divDentro);

    let imgPatoUm = document.createElement('img');
    imgPatoUm.setAttribute('class', 'pato-a')
    imgPatoUm.src = 'imagens/pato-1.png';
    imgPatoUm.style.display = 'block';
    imgPatoUm.style.position = 'absolute';
    imgPatoUm.style.top = '0';
    imgPatoUm.style.left = '0';
    divDentro.appendChild(imgPatoUm);

    let imgPatoDois = document.createElement('img');
    imgPatoDois.setAttribute('class', 'pato-b');
    imgPatoDois.src = 'imagens/pato-2.png';
    imgPatoDois.style.display = 'block';
    imgPatoDois.style.position = 'absolute';
    imgPatoDois.style.top = '0';
    imgPatoDois.style.right = '0';
    divDentro.appendChild(imgPatoDois);

    let secao = document.createElement('section');
    secao.setAttribute('class', 'mensagem');
    secao.style.width = '90vw';
    secao.style.textAlign = 'center';
    divDentro.appendChild(secao);

    let para1 = document.createElement('p');
    para1.textContent = 'Parabéns Yasmin Christinne! Feliz Aniversário!';
    secao.appendChild(para1);

}