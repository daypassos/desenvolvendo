console.log (escrevetela()); //chamando função

function escrevetela (){ //função global
    var str = "";

    str = "Testando função";

    return str;
}

var escrevetela2 = function(){ //função local
    return 2;
}

console.log (escrevetela2()); //chamando função

function recebendoP(param, param2){
    var str = param2+" "+param; //concatenando Int com Str
    return str;
}

var x = "o resultado é: "+recebendoP(56, "hjk");
var y = "o resultado é: "+recebendoP(3435, "jhgf");

console.log (x);
console.log (y);



var mae={
    "nome": "Joana",
    "idade": 25,
    "cor" : "preta",
    "getNome": function (){
    
    return this.nome;
    }
};
console.log("Testando a função: "+mae.getNome());

var irmao={
    "nome": "Zé",
    "idade": 2,
    "cor" : "preto"
}

var pai={
    "nome": "Pai Zé",
    "idade": 32,
    "cor" : "marron"
}
var primo={
    "nome": "Zé",
    "idade": 22,
    "cor" : "marron"
}

var familia = [];

familia.push(mae);
familia.push(irmao);
familia.push(pai);
familia.push(primo);


function vemFamilia (familia){

    for (var i=0; i < familia.length; i++){
        //console.log(familia[i].cor);
        console.log("Você se chama "+familia[i].nome +". Tem "+familia[i].idade+" de idade. E sua cor é "+familia[i].cor+".");
    }
    return true;
}

console.log(vemFamilia(familia));

//FUNÇÃO CAPTURA UMA POSIÇÃO DO ARRAY, TRATA E TRANSFORMA EM STR
function escreveFamilia (obj){
    var str = "Você se chama "+obj.nome +". Tem "+obj.idade+" de idade. E sua cor é "+obj.cor+"."
    return str;
}

for (var k in familia){ // iniciando de 0 ao último item
   console.log(escreveFamilia(familia[k]));
}

function getMembroNome(familia, nome){

    var str = "";
    for (var i=0; i < familia.length; i++){
        if (familia[i].nome === nome){
            str = "--->>>Oi "+familia[i].nome +". Eu sei que vc tem "+familia[i].idade+" de idade. E sua cor é "+familia[i].cor+"<<<<----";
        }
    }
    return str;
}
console.log(getMembroNome(familia, "Zé"));

function getMembrosNome(familia, nome){

    var str = "";
    var array =[];
    for (var i=0; i < familia.length; i++){
        if (familia[i].nome === nome){
            str = "--->>>Oi "+familia[i].nome +". Eu sei que vc tem "+familia[i].idade+" de idade. E sua cor é "+familia[i].cor+"<<<<----";
            array.push(str);
        }
    }
    return array;
}
console.log(getMembrosNome(familia, "Zé"));