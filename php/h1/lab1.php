<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>lab 01</title>
  </head>
  <body>
    <?php
      $breedte = 10;
      $lengte = 11;
      $hoogte = 5;

      $oppervlakte = $breedte * $lengte;
      echo "Containeroppervlakte is: $oppervlakte <br>";

      $inhoud = $hoogte * $oppervlakte;
      echo "Containervolume: $inhoud";
    ?>
  </body>
</html>
