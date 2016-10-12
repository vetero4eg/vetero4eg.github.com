<?php
require __DIR__.'/php/lib.php';
			/*
		CREATE TABLE IF NOT EXISTS info
		(
			id_img SERIAL NOT NULL,
			filename VARCHAR(15) NOT NULL,
			filetype VARCHAR(15) NOT NULL,
			filesize INT NOT NULL,
			popular INT
		)*/	\
function uploadImg($file, $type=array('image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/tiff')){
	if ($file['name'] == ''){
		echo 'Файл не выбран!';
		return;
	}
	if (!in_array($_FILES['file']['type'], $type)){
		echo 'Не подходящий тип файла! Выберите картинку.';
		return;
	}
	if($_FILES['file']['size']>1024000){
		echo 'Слишком большой файл!';
		return;
	}
	if (copy($file['tmp_name'], './img/'.$file['name'])){
		//header('Location: /index.php');
		/*$link = mysqli_connect("localhost", "root", "", "gallery") or die("Error");
		mysqli_query($link, "SET NAMES UTF8");
		$filename=$_FILES['file']['name'];
		$filetype=$_FILES['file']['type'];
		$filesize=$_FILES['file']['size'];
		$res = mysqli_query($link, "INSERT INTO info (filename, filetype, filesize) VALUES ('$filename', '$filetype', '$filesize')") or die("ОШИБКА");
		$link = mysqli_close($link);*/
		echo 'Файл успешно загружен.';
		//exit;
	}
	else echo 'Ошибка загрузки файла.';
return;
}
if (isset($_FILES['file'])){
	uploadImg($_FILES['file']);

}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/css/style.css"/>

	<title>Галерея</title>
	<!--[if lt IE 9]> 
 	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> 
	<![endif]-->
</head>
<body>
	<form  method="post" enctype="multipart/form-data">
		<input type="file" name="file">
		<input type="submit" value="Загрузить картинку" name="button">
	</form>
	<hr>
	<h1>Галерея</h1>
	<div class="foto">
		<?php 		
		foreach (getList() as $key => $value) {
				echo "<a href=/php/photo.php?id=$value><img src='/img/$value' width=150></a>";
			}	
	?>
	</div>
</body>
</html>