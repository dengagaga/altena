<?php
$to = "du.nefyodov@gmail.com"; // емайл получателя данных из формы
$tema = "=?UTF-8?B?" . base64_encode("Заявка с сайта Альтэна. Расчет окупаемости") . "?=";
$message = "Мощность, кВт: ".$_POST['power']."<br>";
$message .= "Количество ГПУ: ".$_POST['count']."<br>";
$message .= "Загрузка, моточасов в год: ".$_POST['load']."<br>"; 
$message .= "Исполнение: ".$_POST['execution']."<br>"; 
$message .= "Напряжение генератора: ".$_POST['generator']."<br>"; 
$message .= "Система утилизации тепла: ".$_POST['util']."<br>"; 
$message .= "Стоимость 1 м³ газа с НДС: ".$_POST['gas']."<br>"; 
$message .= "Калорийность газа, ккал/м³: ".$_POST['calorie']."<br>"; 
$message .= "Цена кВт электроэнергии от сетей: ".$_POST['networks']."<br>"; 
$message .= "Цена 1 Гкал тепла от теплосетей: ".$_POST['heating']."<br>"; 
$message .= "Номер телефона: ".$_POST['number']."<br>"; 
$message .= "Email: ".$_POST['email']."<br>"; 
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