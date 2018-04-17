<?php
$a = "4.67";
$b = 4.67;

if ($a==$b){
    echo "Caso1: A = B em valor<br>";
}

if ($a!==$b){
    echo "Caso2: A = B em valor, e <> em tipo<br/>";
}
$a =4;
$b =4;

if ($a===$b){
    echo "Caso3: A = B extamente<br/>";
}

if ($a<>$b){ //ou $a!=$b
    echo "Caso4: A e B são diferente<br/>";
}

//Caso 5 é igual ao 2

$a ="8";
$b =2;
if (((int)$a) >= $b){
    echo "Caso 6: A > B";
}
$a = "8";
$b = 12;
if ((int)$a <= $b){
    echo ("Caso 7: A menor que B");
}

?>




