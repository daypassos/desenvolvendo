function retorna (){

    var a = "24.6";
    var b = "A soma de: ";
    var c = 8.7;
    var d = false;
    var f = "!";
    var g = undefined;

    if (((+a+c).toFixed(2)) > 26){
        d =true;
    } 

    var x = (((+a+c).toFixed(2)) > 26) ? "É maior": "É menor";

    var t = (g !== undefined ) ? g: "Indefinido";

    if (g == undefined ) {
        console.log("Valor Inválido");
        return false;
    }

    console.log(t);
    console.log(b + ((+a+c).toFixed(2)) +f);
    console.log(d);
    console.log(x);

}
retorna();