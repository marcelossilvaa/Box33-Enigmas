
function resolverEnigma(resEnigma){
    const str = document.getElementById('tentativa').value
    const botao = document.getElementById("botao-surgir")

    const newBtn = document.createElement('button')
    newBtn.innerText = ''
    newBtn.id = 'btnGo'

    var resposta = document.getElementById('resposta')


    com_acento = "áàãââÁÀÃÂéêÉÊíÍóõôÓÔÕúüÚÜçÇABCDEFGHIJKLMNOPQRSTUVXWYZ";
    sem_acento = "aaaaaaaaaeeeeiioooooouuuuccabcdefghijklmnopqrstuvxwyz";
    var novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    
    if(novastr == resEnigma){
        resposta.innerHTML = 'Parabéns, você acertou!'
        botao.appendChild(newBtn)
        
    } else {
        resposta.innerHTML = 'Você errou, tente novamente.'
    }
}



function botaoEnter(e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
            case 13 : 
                resolverEnigma('resEnigma')
            break;
    }
}
//Novo botão

