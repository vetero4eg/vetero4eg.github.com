<?php
	$id=$_GET['id'];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" href="../css/style.css"/>

	<title>Фото №<?=$id?></title>
	<!--[if lt IE 9]> 
 	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> 
	<![endif]-->
</head>
<body>
	<nav>
		<a href="../index.php"><p>На главную</p></a>
	</nav>
	<h2>Фото <?=$id?></h2>
	<img src="../img/<?=$id;?>" alt="Большая картинка">
</body>
</html>