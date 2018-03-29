<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$what=$_POST['what'];
$to="olkaveter@gmail.com";
$subject="personal.iicon.ru: заказ обратного звонка";
$message= "Письмо из формы <br />"
."Имя: "
.htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone)."<br />
Сообщение: ".htmlspecialchars($what);
$headers = "Заказ обратного звонка \r\nContent-type: text/html;
charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
//header('Location: index.html');
//exit();
?>