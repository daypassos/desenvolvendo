//array simples
var a ="oi";
var b= "tchau";
var c = "bença";
var vetor=[];

vetor.push(a);
vetor.push(b);
vetor.push(c);

console.log(vetor);

console.log(vetor[0] + " mãe, "+vetor[1] +" mano! "+vetor[2]+ " pai.");

//array: objeto familia
var familia = {
    "0" : "mãe",
    "1" : "pai",
    "2" : "irmao"
};

console.log(familia);

console.log(vetor[0] + " " +familia[0] +", "+vetor[1] + " " +familia[2]+", "+vetor[2]+" "+familia[1]);
//#################################################################################
console.log("Olá, eu sou uma MATRIZ");

var mae={
    "nome": "Joana",
    "idade": 25,
    "cor" : "preta"
};

var irmao={
    "cor" : "preto",
    "idade": 2,
    "nome": "Zé"
}

var pai={
    "cor" : "preto",
    "idade": 32,
    "nome": "Pai Zé"
}

var familia = [];

familia.push(mae);
familia.push(irmao);
familia.push(pai);
console.log(familia[2].idade);

console.log("O nome da minha mãe é: "+familia[0].nome +". Ela tem "+familia[0].idade+" de idade. E sua cor é "+familia[0].cor+".");

console.log(JSON.stringify(familia)); //conversão de array em JSon