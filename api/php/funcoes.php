<?php
echo escrevetela();

function escrevetela(){
    $str ="1: Testando função <br>";
    return $str;
}

function escreveTela2 (){
    return 2;
}

echo "2: Testando return: ".escreveTela2();

function recebendo($p1, $p2){
    $str = $p1." ".$p2;
    return $str;
}

$x = "<br>3:<br>O resultado é: ".recebendo(32, "qwert");
$y = "<br>O resultado é: ".recebendo(87, "asdfg<br><br>");

 echo $x;
 echo $y;


$mae = array (
    "nome" => "Joana",
    "idade" => 25,
    "cor" => "preta",
    "getNome" => function (){
        return $this->nome;
    }
);

$irmao = array (
    "nome" => "Zé",
    "idade" => 2,
    "cor" => "preto"
);

$pai = array (
    "nome" => "Pai Zé",
    "idade" => 32,
    "cor" => "marron"
);


$primo = array (
    "nome" => "Primo Zé",
    "idade" => 22,
    "cor" => "marron"
);

$familia = array ();
array_push($familia, $mae);
array_push($familia, $pai);
array_push($familia, $irmao);
array_push($familia, $primo);

function vemFamilia ($familia){
    for ($i=0;$i<count($familia);$i++){
        echo "<br>Você se chama ".$familia[$i]["nome"].". Tem ".$familia[$i]["idade"]." de idade. E sua cor é ".$familia[$i]["cor"].".";
    }
return true;
}

vemFamilia($familia);

echo "<br><br>";
function escreveFamilia ($obj){
    $str = "<br>Ei ".$obj['nome'].". Você tem ".$obj['idade']." de idade. E sua cor é ".$obj['cor'].".";
return $str;
}

foreach ($familia as $membro){
    echo escreveFamilia($membro);
}

function getMembroNome ($familia, $nome){
    foreach ($familia as $oNome =>nome){
        $str => "--->>>Oi ".($oNome['nome']);
    }
return $str;
}

getMembroNome($familia, "Primo Zé");

?>