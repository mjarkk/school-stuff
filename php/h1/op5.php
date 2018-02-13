<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Opdracht 5</title>
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
