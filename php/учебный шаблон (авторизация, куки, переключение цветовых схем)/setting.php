<?php
if(isset($_POST['tema'])){
		$tema=$_POST['tema'];
		switch ($tema) {
			case 'lime-blue':
				$tema=1;
				setcookie("tema", "$tema");	
				break;
			case 'winter':
				$tema=2;
				setcookie("tema", "$tema");	
				break;
			case 'corn':
				$tema=3;
				setcookie("tema", "$tema");				
				break;
		}
	} elseif (isset($_COOKIE['tema'])){
			$tema=$_COOKIE['tema'];
}	else{
	echo "Тема по умолчанию - corn";
	$tema=3;
}
if(isset($_POST['exit'])){
	session_destroy();
	header("Location: index.php");
	exit();
}
?>