/*
nome = "Luka";
console.log(nome);

idade = 23;
console.log(idade + 1);

peso = "56.75";
peso = parseFloat(peso);
console.log(peso)


idade = 17;
if( idade >= 18){
    console.log ("possui 18 anos");
} else{
    console.log("não possui 18 anos");
}
console.log("Fim");


nro = 10;
resto = nro % 2;
if( resto == 0){
    console.log("par");
}else{
    console.log("ímpar");
}
console.log("fim");


nro = 3;
resto = nro % 3;
if( resto == 0){
    console.log("multiplo de 3");
}else{
    console.log("não é multiplo de 3");
}
console.log("fim");


entrada = prompt("entre com a idade")
idade = parseInt(entrada);
if(idade < 18){
    console.log("de menor");
}else{
    console.log("de maior");
}
console.log("por hj é isso pessoal");
*/

entrada = prompt("entre com a idade")
idade = parseInt(entrada);
if(idade < 18){
    console.log("de menor");
}else{
    if(idade < 65){
        console.log("de maior");
    }else{
        console.log("melhor idade");
    }
}
console.log("por hj é isso pessoal");