<?php

$items = array('red/apple/candy/jujube/red','green/apple/candy','red/garnet/juice','green/grapes/candy',
			'orange/orange/coctail/alcohol','green/apple/jujube/green','green/grapes/ice cream',
			'red/apple/candy','orange/orange/juice','orange/orange/pie','red/strawberry/candy',
			'red/strawberry/pie','orange/orange/coctail/non alcohol','red/apple/puree','green/grapes/juice',
			'green/grass/silo','red/strawberry/juice','red/apple/candy/jujube/green','red/garnet/candy/red',
			'red/grapes/ice cream','red/garnet/candy/jujube','red/apple/candy/jujube/blue',
			'green/apple/jujube/green','red/strawberry/ice cream','red/apple/ice cream','red/garnet/pie',
			'green/grass/hay','green/lime/coctail/non alcohol','red/grapes/juice','green/lime/coctail/alcohol',
			'green/lime/tea','green/apple/puree','green/lime/mousse','red/apple/candy/sweet',
			'green/apple/sweet','red/grapes/candy');


//Реализуем вручную алгоритмы implode и explode
function packArrayInString($items) {
	$str = '';
	$separator = "_";
	foreach($items as $item){
		$str .= $item;
		$str .= $separator;
	};
	return $str;
};

function unpackStringInArray($str) {
	$arr = array();
	$temp = "";
	$separator = "_";
	$iteration = strlen($str);
	for($i = 0; $i < $iteration; $i++){
		if($str[$i] != $separator){
			$temp .= $str[$i];
		} else {
			array_push($arr, $temp);
			$temp = "";
		};
	};
	return $arr;
};

function testArr($items) {
	$i = 0;
	foreach($items as $item){
		echo "$i-й элемент массива: $item <br />";
		$i++;
	};
};

echo "<hr /> Исходный массив: <hr />";
testArr($items);
$str = packArrayInString($items);
$arr = unpackStringInArray($str);
echo "<hr /> Строка: <hr />";
echo "$str";
echo "<hr /> Массив после распаковки строки: <hr />";
//var_dump($arr);
testArr($arr);
?>
