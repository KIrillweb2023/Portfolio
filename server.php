<?php

$to = "gulaevkirill899@gmail.com";
$name = clear_submit($_POST["name"]);
$email = clear_submit($_POST["email"]);
$text = clear_submit($_POST["text"]);


$subjects = "Заявка";
$messange = "Сообщение";

$headers = "From: portfolio@site.ru\r\n";
$headers .= "Replay-To: portfolio@site.ru\r\n";
$headers .= "X-Mailer: PHP/". phpversion();

$messange = 'Имя: ' . $name ."\n" . 'Email'. $email . "\n" . 'Сообщение' . $text . "\n";

function clear_submit($int){
    $int = trim($int);
    $int = stripslashes($int);
    $int = htmlspecialchars($int);

    return $int;
}

if(isset($_POST["submit"])){
    mail($to, $subjects, $messange);
}

?>