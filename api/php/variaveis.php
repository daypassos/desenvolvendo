<?php

$x = NULL;
$y = 13.8;
$k = "3.7";
$p = 1.3;
$d = true;

if ($y != $k){
    echo "Comparando Str com Int. Variáveis Iguais ".$y. " e ".$k;
} else {
    echo "Comparando Str com Int. Variáveis diferentes ".$y. " e ".$k;
}

if ($d){
    echo "<br>Var Bool: Verdadeiro";
}

echo "<br/>A soma de y + p: ". ($y+$p);

echo "<br><br/>Tipo da variavel Y: ", gettype($y); //diz qual o tipo da var
echo "<br/>Tipo da variavel K: ", gettype($k);

echo "<br/> O valor de x é do tipo: ",gettype($x);
echo "<br/> Y vale '$k' do tipo: ",gettype($k). ", e convertendo para Int é: ".(int)$k ;
echo "<br/> O valor de p: ".$p ." do tipo: ",gettype($p);
echo "<br/> O valor de d: ".$d ." do tipo: ",gettype($d);

echo "<br/> Tentativa de soma entre Str+Num= ".($k+$y);


echo "<br/><br/><br/><br/>";

echo "Mostra x: ".gettype($x);
echo "<br/>Mostra y: ".$y;
echo "<br/>Mostra k: ".$k;
echo "<br/>Mostra p: ".$p;
echo "<br/>Mostra d: ".$d;

?>