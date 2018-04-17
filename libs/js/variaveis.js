var x = null;
var y = 13.8;
var k = "0.7";
var p = 1.3;
var d = true; 

if (y===+k) {
    console.log("Comparação de Str com Num");
}

if (d){ //a comparação é automática
    console.log("Compração Bool: Verdadeiro");
}

console.log( (y+p).toFixed(2) ); //arredondamento




console.log(x);
console.log(typeof(y)); 
//console.log(typeof(parseInt(k))); //conversão para number
console.log(typeof((+k))); //conversão para number
console.log(p);
console.log(d);

console.log(+k+y); //conversão do Str para Num, fazendo soma