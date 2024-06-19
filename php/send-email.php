<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = trim(stripslashes($_POST['name']));
   $email = trim(stripslashes($_POST['email']));
   $contact_message = trim(stripslashes($_POST['message']));

   $subject = "Contact Form Submission";

   $mail = new PHPMailer(true);
   try {
      // Abilita il debug dettagliato (disabilitato in produzione)
      $mail->SMTPDebug = 0;
      $mail->Debugoutput = 'html';

      // Configurazione del server SMTP di Gmail
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      $mail->Username = 'mekki.ouertani@gmail.com'; // Sostituisci con il tuo indirizzo Gmail
      $mail->Password = 'veth irnu jvbp nqti'; // Sostituisci con la tua password Gmail
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = 587;

      // Opzioni SSL (puoi disabilitarle se non funzionano)
      $mail->SMTPOptions = array(
         'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
         )
      );

      // Destinatario
      $mail->setFrom($email, $name);
      $mail->addAddress('mekki.ouertani@gmail.com'); // Il tuo indirizzo email
      $mail->addReplyTo($email, $name); // Imposta l'indirizzo Reply-To

      // Contenuto dell'email
      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body = "Email from: " . $name . "<br />Email address: " . $email . "<br />Message: <br />" . nl2br($contact_message) . "<br /> ----- <br /> This email was sent from your site contact form.";

      $mail->send();
      echo 'OK';
   } catch (Exception $e) {
      echo "Mailer Error: " . $mail->ErrorInfo;
   }
}
?>