<?php
/*
	Ввиду того, что PHP не поддерживает Unicode напрямую, для простоты будем оперировать ASCII кодами для шифрования
	аналогичным способом, как и в случае JS программы.
*/

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

$textkey = "vt4";


function packItems($items, $textkey) {
	$list = array($textkey=>$items);
	$shifr = listToString($list, $textkey);
	return shifrator($shifr, $textkey);
};

$shifr = packItems($items, $textkey);
echo "<hr /> Зашифрованная строка: <br />";
var_dump($shifr);
echo "<hr /> Расшифрованная строка: <br />";
var_dump(deshifrator($shifr, "vt4"));
echo "<hr /> Попытка расшифровать строку с другим ключом: <br />";
var_dump(deshifrator($shifr, "vt"));
echo "<hr />";

function listToString($list, $textkey) {
	$str = '';
	$separator = "_";
	$key = array_keys($list);
	if ($key[0] != $textkey){
		echo "Неверный ключ";
	} else {
		foreach($list[$textkey] as $item){
			$str .= $item;
			$str .= $separator;
		};
	};
	return $str;
};

function toCode($str){
	$sum = 0;
	$iteration = strlen($str);
	for($i = 0; $i < $iteration; $i++) {
		$sum += ord($str[$i]);
	};
	return $sum;
};

function shifrator($str, $textkey) {
	$shifr = "";
	$salt = toCode($textkey);
	$iteration = strlen($str);
	for($i = 0; $i < $iteration; $i++){
		$shifr .= chr(ord($str[$i]) + $salt);
	};
	return $shifr;
};

function deshifrator($shifr, $textkey) {
	$str = "";
	$salt = toCode($textkey);
	$iteration = strlen($shifr);
	for($i = 0; $i < $iteration; $i++){
		$str .= chr(ord($shifr[$i]) - $salt);
	};
	return $str;
};





/*
//Эти функции можно использовать при изменении порядка упаковки и шифрования, например для того,
//чтобы получить массив с зашифрованными частями строки и удобного вывода его на экран при тестировании.

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
*/
?>
