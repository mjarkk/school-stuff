<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 23 to 26</title>
    <link rel="stylesheet" href="../other/css/main.css">
  </head>
  <body>
    <?php
      /*
      functions used:
      print_r()
      array_slice()
      if else
      if else in-line
      */

      // a wrapper around echo "<br><br> $some_text <br>"
      function addBr($input) {
        echo "<br><br> $input <br>";
      }

      // create a test array just for testing
      $testarr = array(
        'item1',
        'item2',
        'item3',
        'item4'
      );

      addBr("array_slice()");
      print_r(array_slice($testarr, 1,2)); // -> ['item2','item3']

      addBr("if else");
      $randomValue = rand(0, 10);
      if ($randomValue > 5) {
        echo "randomValue is more than 5";
      } else {
        echo "randomValue is less than 5";
      }

      addBr("if else in-line");
      echo "randomValue is " . (($randomValue > 5) ? "more" : "less") . " than 5";

    ?>
  </body>
</html>
