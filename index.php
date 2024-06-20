<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>

<body>
    <h1>Contact Form</h1>
    <form action="php/send-email.php" method="post">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Messaggio:</label>
        <textarea id="message" name="message" cols="30" rows="7" required></textarea>
        <button type="submit">Invia</button>
    </form>
</body>

</html>