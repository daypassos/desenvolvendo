<?php
    $a = "24.6";
    $b = "A soma de: ";
    $c = 8.7;
    $d = false;
    $f = "!";
   $g ="";

   if (($a+$c) > 26){
       $resul = ($a+$c);
       $d=true;
       echo "Soma de Str+Int= ".$resul. " e é maior que 26, portanto: ";
       var_dump($d); //informa o tipo e o conteúdo
       ;
   }

   echo "<br/>Convertendo Float em Int: ".(int)$resul; 

   $x = (($a+$c) > 26) ? "É maior": "É menor";
   echo "<br/>".$x;

   echo "<br/><br/><br/>";

echo ($g == "") ? "G: Está vazia": "Há conteúdo em G";

echo "<br/> Valor de 'd': ".$d;
echo "<br/> Valor de 'x': ".$x;
   
?>