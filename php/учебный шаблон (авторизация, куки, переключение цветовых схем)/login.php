<?php
	session_start();
	if($_SESSION['user']){
	header("Location: index.php");
	exit();
	}
	if(isset($_POST['user'])&&isset($_POST['pass'])){
		$user=$_SESSION['user']=$_POST['user'];
		$pass=$_SESSION['pass']=$_POST['pass'];
		$warning1="Логин запомнили";
		$warning2="Пароль запомнили";
		header("Location: one.php");
		exit();
	} else {
		$warning1="Введите логин";
		$warning2="Введите пароль";
	}
	include("setting.php");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" href="css/style_<?=$tema?>.css"/>
	<title>Страница авторизации</title>
	<!--[if lt IE 9]> 
 	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> 
	<![endif]-->
</head>
<body>
	<header>
		<div class="logo"><h1><a href="one.php">Сайт доступен только для авторизованных пользователей</a></h1></div>
		<form class="color" method="post">
			<p>Выберите цветовую схему</p>
			<input type="submit" name="tema" value="lime-blue">
			<input type="submit" name="tema" value="winter">
			<input type="submit" name="tema" value="corn">
		</form>

	</header>
	<form class="auth" method="post">
		<div class="lp">
				<label>Логин:&nbsp;&nbsp;&nbsp;
				<input type="text" name="user" placeholder="<?=$warning1?>"></label> <br><br>
				<label>Пароль: 
				<input type="password" name="pass" placeholder="<?=$warning2?>"></label>
				<br>
				<input type="submit" value="Вход">
		</div>
	</form>
	<footer>
		<p>&copy;Vetero4eg</p>
	</footer>
</body>
</html>