var a = "4.67";
var b = 4.67;

//Caso1:Comparando o valor da variável

if (a==b) console.log("Caso1: A e B são iguais");

//Caso2:Comparando valor igual e tipo diferente

if (a===b) console.log("Caso2: A e B são valor igual e tipo diferente");

//Caso3: Comparando valor e tipo exatamente iguais
a = 4;
b = 4;
if (a===b) console.log("Caso3: A e B são exatamente iguais");

//Caso4: Comparando != valor igual e tipo exatamente iguais
a = 4;
b = 4;
if (a!=b) console.log("Caso4: A e B são diferentes");

//Caso5: Comparando !== valor igual e tipo exatamente iguais
a = "4";
b = 4;
if (a!==b) console.log("Caso5: A = Str e B = Int são diferentes");

//Caso6: Comparando se A >= B
a = "8";
b = 2;
if (+a >= +b){
    console.log("Caso6: A maior que B");
}

//Caso7: Comparando se A >= B
a = "8";
b = 12;
if (+a <= +b){
    console.log("Caso6: A menor que B");
}