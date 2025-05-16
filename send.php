
<?php
$to = "du.nefyodov@gmail.com"; // емайл получателя данных из формы
//$tema = "Заявка с сайта Lazer Zone"; // тема полученного емайла ЭТО СТАРЫЙ ВАРИАНТ!
$tema = "=?UTF-8?B?" . base64_encode("Заявка с сайта Альтэна") . "?="; //ЭТО НОВЫЙ С КОДИРОВКОЙ ПОДПРАВЛЕННОЙ!
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Email: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Телефон: ".$_POST['tel']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("Location: index.html");
exit();
?>