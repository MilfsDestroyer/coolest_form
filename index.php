<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/style.css">
        <title>   
            The coolest form
        </title>
    </head>
    <body>
        <form action="contact.php" method="post">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>

            <label for="email">Email</label>
            <input type="text" name="email" id="email" required>

            <label for="message">Message</label>
            <input type="text" name="message" id="message" required>
            
            <button type="submit">Send</button>
        </form>   

        <script src="js/script.js"></script>
        <script src="js/fontawesome.js"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
    </body>
</html>