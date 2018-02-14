<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lab 6</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php
      $abonnee = "Mark";
      $cost = 100;
      $newcost = 100 * 0.7;
      $brief = "
      Best <b>$abonnee</b>,<br>
      Because you'r our best customer we have a special offer for you.<br>
      As offer your new monthly cost will be: <b>$newcost</b> Instaid of: <b>$cost</b>";

      echo $brief;
    ?>
  </body>
</html>
