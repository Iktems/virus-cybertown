<?php 
$name = $_POST["name"];
$surname = $_POST["surname"];
$headers = $_POST["email"];

$to = 'wibbo.dry@hotmail.com';
$subject = 'RE: Je veux gagner un ticket gratuit !';
$message = 'Les informations du joueur: '.$name.' '.$surname.' '.$headers;
$headers = 'From: '. $headers . "\r\n" .
    'Reply-To: '.$headers . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo 'Votre email a bien été enregistré ! Merci'.$name.' '.$surname.'.';

?>