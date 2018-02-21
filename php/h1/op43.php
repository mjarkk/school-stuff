<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 43</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php

      // Functions:

      function dubble($input) {
        // return variable
        $returnValue = $input * 2;
        return $returnValue;
      }

      function tripple($input) {
        // do the sum in a return
        return $input * 3;
      }

      function times6($input) {
        // use other functions inside this function
        return tripple(dubble($input));
      }

      function multipleInputs($thing1, $thing2) {
        return $thing1 + $thing2;
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
      addBr();
      echo "$testvalue * 6 = " . times6($testvalue);
      addBr();
      echo "5 + 3 = " . multipleInputs(5,3);

    ?>
  </body>
</html>
