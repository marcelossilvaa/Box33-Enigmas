
function resolverEnigma(){

    const str = document.getElementById('tentativa').value
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
    
    if(novastr == 'educacao financeira'){
        resposta.innerHTML = 'Parabéns, você acertou!'
    } else {
        resposta.innerHTML = 'Você errou, tente novamente.'
    }
}