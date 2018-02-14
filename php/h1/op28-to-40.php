<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 28 to 40</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <form action="op28-to-40.getdata.php" method="post">
      <input type="text" name="name" placeholder="name"><br>
      <input type="text" name="adres" placeholder="adres"><br>
      <input type="text" name="place" placeholder="place"><br>
      <input type="text" name="postalcode" placeholder="postalcode"><br>
      <input type="text" name="email" placeholder="E-mail"><br>
      <br>
      <textarea name="comment" rows="8" cols="80" placeholder="comment..."></textarea>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form>
  </body>
</html>
