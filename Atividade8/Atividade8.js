//criando arrays com 10 linhas que permitam armazenar os dados
let arrayIdade = new Array(10);
let arraySexo = new Array(10);
let arrayOpiniao = new Array(10);

//criando variáveis com algumas inicializações para cálculos
let somaIdade = 0;
let mediaIdade;
let maiorIdade = 0;
let menorIdade = Infinity;
let Porcentagem = 0;
let qtdePessimo = 0;
let sexo;
let opiniao;
let i;
let contHomens = 0, contMulheres = 0, contOutros = 0;

//criando loop para coleta de variáveis
for(i = 0; i < 10; i++){
    let idade = prompt((i+1) + "ª pessoa:\n" + "Digite a idade: ");
    if(idade === null)break;
    idade = parseInt(idade);//converter string para inteiro
    maiorIdade = Math.max(maiorIdade, idade);//idade da pessoa mais velha
    menorIdade = Math.min(menorIdade, idade);//idade da pessoa mais nova
    somaIdade = somaIdade + idade;//pode ser feito com "somaIdade += idade;"
    sexo = prompt((i+1) + "ª pessoa:\n" + "Digite M para sexo masculino:\nDigite F para sexo feminino:\nDigite O para outros:").toUpperCase();
    if(sexo === null)break;
    if(sexo == 'M'){ contHomens++};
    if(sexo == 'F'){contMulheres++};
    if(sexo == 'O'){contOutros++};

    opiniao = parseInt(prompt((i+1) + "ª pessoa:\n" + "Qual a opinião sobre o filme?\nDigite 4 para ÓTIMO\nDigite 3 para BOM\nDigite 2 para REGULAR\nDigite 1 para PÉSSIMO "));
    if(opiniao === null)break;
    if((opiniao == 4)||(opiniao == 3)){
        Porcentagem++;
    } else if(opiniao == 1){
        qtdePessimo++; //quantidade de pessoas que responderam PÉSSIMO
    }
    arrayIdade[i] = idade;
    arraySexo[i] = sexo;
    arrayOpiniao[i] = opiniao;
}

mediaIdade = somaIdade / arrayIdade.length; //cálculo da média da idade das pessoas
Porcentagem = Porcentagem / arrayIdade.length; //cálculo da porcentagem de pessoas que responderam ÓTIMO e BOM

//mostrando o armazenamento nos arrays
for(i = 0; i < arrayIdade.length; i++){
    console.log("Idade " + i +": " + arrayIdade[i]);
    console.log("Sexo " + i +": " + arraySexo[i]);
    console.log("Opinião " + i +": " + arraySexo[i]);
}

//mostrando os resultados no console
console.log("Média de idade: " + mediaIdade);
console.log("Idade da pessoa mais velha: " + maiorIdade);
console.log("Idade da pessoa mais nova: " + menorIdade);
console.log("Quantidade de Péssimo: " + qtdePessimo);
console.log("Porcentagem de Ótimo e Bom: " + (Porcentagem * 100) + " %");
console.log(contMulheres + " mulheres responderam.");
console.log(contHomens + " homens responderam.");
console.log(contOutros + " outros responderam.");

