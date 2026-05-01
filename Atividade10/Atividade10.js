let altura = parseFloat(prompt("Digite a altura em metros: "));
let peso = parseFloat(prompt("Digite o peso em KG: "));

//criando a função para calcular o IMC
function IMC(altura, peso){
    let alt = altura;
    let massa = peso;
    let imc = (massa/(Math.pow(alt, 2)));
    return imc.toFixed(2);
}
//retornando IMC da pessoa
alert("IMC DA PESSOA: " + IMC(altura,peso));

if(IMC(altura,peso) < 18.5){
    alert("IMC MENOR QUE 18.5\nCLASSIFICAÇÃO: MAGREZA\nOBESIDADE (GRAU): 0");
}
if(IMC(altura,peso) >=18.5 && IMC(altura,peso) < 25.0){
    alert("IMC: ENTRE 18,5 E 24,9\nCLASSIFICAÇÃO: NORMAL\nOBESIDADE (GRAU): 0");
}
if(IMC(altura,peso) >=25.0 && IMC(altura,peso) < 29.9){
    alert("IMC: ENTRE 25,0 E 29,9\nCLASSIFICAÇÃO: SOBREPESO\nOBESIDADE (GRAU): I");
}
if(IMC(altura,peso) >=30.0 && IMC(altura,peso) < 39.9){
    alert("IMC: ENTRE 30,0 E 39,9\nCLASSIFICAÇÃO: OBESIDADE\nOBESIDADE (GRAU): II");
}
if(IMC(altura,peso) >= 40.0){
    alert("IMC: MAIOR QUE 40.0\nCLASSIFICAÇÃO: OBESIDADE GRAVE\nOBESIDADE (GRAU): III");
}