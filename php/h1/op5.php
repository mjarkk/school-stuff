<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 5</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php
      $dollars = 999.99;
      $koers = 1.2;
      $euros = $dollars * $koers;
      echo "Bedrijf in euro's is: " . (round($euros, 2));
    ?>
  </body>
</html>
