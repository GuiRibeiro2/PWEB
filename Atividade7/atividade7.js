

function jogar() {
    let opUsuario = parseInt(prompt("Digite 1 para pedra \nDigite 2 para papel\nDigite 3 para tesoura"));
    let opComputador = Math.random(0, 1);
    //Opções do usuário:
    if (opUsuario == 1) {
        alert("Você escolheu pedra!");
    } else if (opUsuario == 2) {
        alert("Você escolheu papel!");
    } else if (opUsuario == 3) {
        alert("Você escolheu tesoura!")
    } else {
        alert("Opção inválida! Você perderá para o computador!");
    }


    //Opções do computador:
    if (opComputador <= 0.33) {
        alert("Computador escolheu pedra!");
    } else if (opComputador <= 0.66) {
        alert("Computador escolheu papel!");
    } else {
        alert("Computador escolheu tesoura!");
    }

    //Que comece a disputa! Vamos testar as variáveis e verificar quem ganhou:

    if (opUsuario == 1 && opComputador <= 0.33) {
        alert("Empate!!");
    } else if ((opUsuario == 1 && opComputador < 0.66) //pedra vs papel
        || (opUsuario == 2 && opComputador > 0.66) //papel vs tesoura
        || (opUsuario == 3 && opComputador <= 0.33)) //tesoura vs pedra
    {
        alert("Computador ganhou!");
    } else {
        alert("Você ganhou!");
    }
}