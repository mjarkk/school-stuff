<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 28 to 40</title>
    <?php include '../other/addcustomdata.php'; ?>
  </head>
  <body>
    <?php

    // a wrapper around echo "<br><br> $some_text <br>"
    function addBr($input) {
      echo "<br><br> $input <br>";
    }

    // this file gets the data from op27.php
    // This will just return what you have send to the server
    if (isset($_POST["submit"])) {

      $comment = $_POST['comment'];

      addBr("jsondata:");
      echo htmlspecialchars(json_encode($_POST));

      addBr("Comment no html escape:");
      print $comment;

      addBr("Comment html escaped:");
      echo htmlspecialchars($comment);

      addBr("trim()");
      $teststring = "    test    ";
      echo "<pre>Without trim: $teststring</pre><br>";
      echo "<pre>With trim: " . trim($teststring) . "</pre>";

      addBr("strtoupper()");
      $teststring = "test string With UpperCase Letter And Lower CaSe LeTTers";
      echo "Without strtoupper: $teststring<br>";
      echo "With strtoupper: " . strtoupper($teststring);

      addBr("strtolower()");
      echo "Without strtolower: $teststring<br>";
      echo "With strtolower: " . strtolower($teststring);

      addBr("ucfirst()");
      echo "Without ucfirst: $teststring<br>";
      echo "With ucfirst: " . ucfirst($teststring);

      addBr("explode()");
      $test = "mark@depro.com";
      echo "output of: $test = " . json_encode(explode('@',$test)) . " using: @";

      addBr("strlen()");
      echo "output of: $test = " . strlen($test);

      addBr("substr()");
      $test = "1111AB";
      echo "output of: $test = " . substr($test, 0 , 4);

      addBr("strpos()");
      echo "output of: <b>$teststring</b> = <b>" . strpos($teststring, "UpperCase") . "</b>";

      addBr("nl2br()");
      $test = "line1 \n line2";
      echo "output without nl2br <b>$test</b><br>";
      echo "output with nl2br <b>" . nl2br($test) . "</b>";

      addBr("strpos()");
      $filter = array(
        "faggot",
        "stupid"
      );
      $test = "You stupid faggot";
      echo "output without str_replace: <b>$test</b> , with str_replace:  <b>" . str_replace($filter, "******", $test) . "</b>";

      addBr("");

    } else {
      header("Location: op28-to-40.php");
      die();
    }
    ?>
  </body>
</html>
