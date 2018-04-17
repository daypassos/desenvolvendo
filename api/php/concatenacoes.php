<?php
/*
$a = "oir";
$b ="tchau";
$c = "bença";
$vetor();
*/

$lista = array();
$lista[0] = "oi";
$lista[1] = "tchau";
$lista[2] = "bença";

print_r($lista);

echo "<br/>".$lista[0]." mãe. ". $lista[2]. " pai! ". $lista[1]. " mano!";

$familia = array(
    "0" => "mãe",
    "1" => "pai",
    "2" => "irmao",
);
echo "<br/>";
print_r($familia);

?>