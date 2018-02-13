<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 4</title>
  </head>
  <body>
    <?php
      $naam = "Mark";
      $adres = "Som Screet 123";
      $woonplaats = "Groningen";

      $nav = "$naam, $adres, $woonplaats";
      // OR: $nav = $naam . ", " . $adres . ", " . $woonplaats;

      echo "gegevens: $nav";
    ?>
  </body>
</html>
