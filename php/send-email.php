<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

error_log("Request method: " . $_SERVER["REQUEST_METHOD"]); // Log the request method

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   error_log("POST request received"); // Log when POST request is received
   $name = trim(stripslashes($_POST['name']));
   $email = trim(stripslashes($_POST['email']));
   $contact_message = trim(stripslashes($_POST['message']));

   error_log("Name: " . $name); // Log the name
   error_log("Email: " . $email); // Log the email
   error_log("Message: " . $contact_message); // Log the message

   $subject = "Contact Form Submission";

   $mail = new PHPMailer(true);
   try {
      $mail->SMTPDebug = 0; // Disattiva il debug per la produzione
      $mail->Debugoutput = 'html';

      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      $mail->Username = getenv('GMAIL_USERNAME');
      $mail->Password = getenv('GMAIL_PASSWORD');
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = 587;

      $mail->SMTPOptions = array(
         'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
         )
      );

      $mail->setFrom($email, $name);
      $mail->addAddress('mekki.ouertani@gmail.com');
      $mail->addReplyTo($email, $name);

      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body = "Email from: " . $name . "<br />Email address: " . $email . "<br />Message: <br />" . nl2br($contact_message) . "<br /> ----- <br /> This email was sent from your site contact form.";

      $mail->send();
      echo 'OK';
   } catch (Exception $e) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      error_log("Mailer Error: " . $mail->ErrorInfo); // Aggiungi il log dell'errore
   }
} else {
   echo "Invalid request method.";
   error_log("Invalid request method."); // Aggiungi il log dell'errore
}
?>