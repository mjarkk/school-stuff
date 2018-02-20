<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 43</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php

      function dubble($input) {
        // return variable
        $returnValue = $input * 2;
        return $returnValue;
      }

      function tripple($input) {
        // do the sum in a return
        return $input * 3;
      }

      function addBr() {
        // no return just echo it out
        echo "<br>";
      }

      $testvalue = 43;

      addBr();
      echo "the dubble of $testvalue = " . dubble($testvalue);
      addBr();
      echo "the tripple of $testvalue = " . tripple($testvalue);


    ?>
  </body>
</html>
