<?php
$to = "du.nefyodov@gmail.com"; // емайл получателя данных из формы
$tema = "=?UTF-8?B?" . base64_encode("Заявка с сайта Альтэна") . "?=";
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "Email: ".$_POST['email']."<br>";
$message .= "Телефон: ".$_POST['tel']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Отправка письма
$mailSent = mail($to, $tema, $message, $headers);

// Перенаправление
if ($mailSent) {
    header("Location: index.html");
    exit();
} else {
    header("Location: error.html"); // Создайте страницу с ошибкой
    exit();
}
?>