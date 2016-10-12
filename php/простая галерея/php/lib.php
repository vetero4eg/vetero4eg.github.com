<?php
//Функция загрузки фото
//почему-то когда переношу функцию в этот файл 
//и указываю форме атрибут action="/php/lib.php"
//выдает кучу ошибок, причем по scandir 
//Функция получает список файлов в папке
function getList($dirName='./img'){
	$List=array();
	$scan_list=scandir($dirName);
	foreach ($scan_list as $key => $value) {
		if(($value=='.')||($value=='..')||($value=='thumb.db')){
			continue;
		} else	array_push($List, $value);
	}
	return $List;
}
//Функция ресайза
//______________________________________________
//______________________________________________
//$count = count(getList()); //счетчик файлов по листу в директории
?>