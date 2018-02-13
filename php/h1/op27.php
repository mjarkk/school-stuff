<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 27</title>
    <link rel="stylesheet" href="../other/css/main.css">
  </head>
  <body>
    <form action="op27.getdata.php" method="post">
      Uw naam :
      <input type="text" name="name" placeholder="name">
      <input type="hidden" name="lang" value="false">
      <br>Your language
      <input type="radio" name="lang" value="D"> Dutch
      <input type="radio" name="lang" value="E"> English
      <input type="radio" name="lang" value="S"> Spanish
      <br>
      <input type="submit" name="submit" value="Send">
    </form>
  </body>
</html>
