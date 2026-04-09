var nomeAluno = prompt ("Insira o nome do aluno:");
var nota1 = prompt ("Digite a nota 1");
var nota2 = prompt ("Digite a nota 2");
var nota3 = prompt ("Digite a nota 3");
var nota4 = prompt ("Digite a nota 4");
var mediaAluno = ((parseFloat(nota1)) + (parseFloat(nota2)) + (parseFloat(nota3)) + (parseFloat(nota4)))/4;
mediaAluno = mediaAluno.toFixed(2);
   

alert("O aluno " + nomeAluno + " obteve média: " + mediaAluno);