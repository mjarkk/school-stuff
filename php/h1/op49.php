<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 46</title>
    <?php error_reporting(0); include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php

    function test() {
      $testVariable = "test2";

      echo $GLOBALS["testVariable"];
      // prints: "test1" because it gets the global variable that is not overwritten by the one that the function uses

      addEnter(2);

      echo $testVariable;
      // prints: "test2" because the function has set a variable

    }

    $testVariable = "test1";
    test();

    ?>
  </body>
</html>
