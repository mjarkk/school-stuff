<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lab 4</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php
      $boeken = array(
        array(
          "title" => "Stoner",
          "auteur" => "John williams",
          "genre" => "fictie",
          "prijs" => 19.99
        ),
        array(
          "title" => "De cirkel",
          "auteur" => "Dave Eggers",
          "genre" => "fictie",
          "prijs" => 22.50
        ),
        array(
          "title" => "Rayuela",
          "auteur" => "Julio Cortazar",
          "genre" => "fictie",
          "prijs" => 25.50
        )
      );

      echo "<h1>Lab 04</h1>";
      foreach ($boeken as $boek) {
        echo "prijs: " . round($boek["prijs"], 2) . "<br>";
      }
    ?>
  </body>
</html>
