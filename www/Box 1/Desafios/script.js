var riddle = ['', 'williamshakespeare', 'leonardodavinci', 'beethoven', 'pablopicasso', 'fridakahlo', 'charliechaplin', 'janeausten'];

function resolverEnigma(_riddle){
    const str = document.getElementById('tentativa').value;
    const botao = document.getElementById("botao-surgir");
    var resposta = document.getElementById('resposta');

  //surgir botão ---------------


    com_acento = "áàãââÁÀÃÂéêÉÊíÍóõôÓÔÕúüÚÜçÇABCDEFGHIJKLMNOPQRSTUVXWYZ";
    sem_acento = "aaaaaaaaaeeeeiioooooouuuuccabcdefghijklmnopqrstuvxwyz";
    var novastr="";   //tirar acentos e letras maiusculas
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

    var resfinal = novastr.replace(/ /g, ''); //tirar espaços

    if(resfinal == _riddle){
        resposta.innerText = 'Parabéns, você acertou!'

        var existingBtn = document.getElementById("btnGo");
        if (!existingBtn) {
            const newBtn = document.createElement('button');
            newBtn.innerText = '';
            newBtn.id = 'btnGo';
            botao.appendChild(newBtn);
        }

    } else {
        resposta.innerText = 'Você errou, tente novamente.'
    }
}


//interação tecla enter
    var input = document.getElementById("tentativa");
    var button = document.getElementById("btnResolver");

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // 13 é o código para a tecla Enter
        event.preventDefault();
        button.click();
    }
});


