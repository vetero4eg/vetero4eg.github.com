/** Учебный (условно адаптивный) шаблон сайта с тремя цветовыми схемами.
 *  Два типа страниц, главная и статьи. На главную ведет заголовок.
 *  По цветовым схемам можно переключаться без авторизации.
 *  Для авторизации можно ввести любые не пустые логин и пароль.
 *  Пользователь и цветовая схема сохраняются в cookie.
**/
<?php
session_start();

if(!$_SESSION['user']){
	$last="login.php";
}elseif(isset($_COOKIE['lastpage'])){
	$last=(string)$_COOKIE['lastpage'];
}else {
	$last="one.php";
}
header("Location: $last");
exit();
?>