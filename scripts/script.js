const coracoes = document.querySelectorAll('img.base');

for(let i=0; i<coracoes.length; i++){
    coracoes[i].addEventListener('click', ()=>{janela()});
}

function janela(){
    let div = document.createElement('div');
    div.setAttribute('class', 'telaescondida');
    document.body.appendChild(div);

    let divDentro = document.createElement('div');
    divDentro.setAttribute('class', 'teladentro');
    div.appendChild(divDentro);

    let imgPatoUm = document.createElement('img');
    imgPatoUm.setAttribute('class', 'pato-a')
    imgPatoUm.src = 'imagens/pato-1.png';;
    divDentro.appendChild(imgPatoUm);

    let imgPatoDois = document.createElement('img');
    imgPatoDois.setAttribute('class', 'pato-b');
    imgPatoDois.src = 'imagens/pato-2.png';
    divDentro.appendChild(imgPatoDois);

    let secao = document.createElement('section');
    secao.setAttribute('class', 'mensagem');
    div.appendChild(secao);

    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'hmensagem')
    h1.textContent = 'Parabéns Yasmin Christinne! Feliz Aniversário!';
    secao.appendChild(h1);

    let para1 = document.createElement('p');
    para1.setAttribute('class', 'pmensagem');
    para1.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, excepturi repudiandae sint voluptate, ex nam, quaerat sit dicta nemo libero eveniet deserunt perferendis doloremque accusamus fuga. Repellat saepe illum a?';
    secao.appendChild(para1);

}