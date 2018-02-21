<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 46</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php

      $tospend = 0;

      // while loop

      do {
        $amound = mt_rand(10,150) * 1.21;
        $tospend = $tospend + $amound;
        echo "Payed: " . round($amound, 2) . "<br>";
      }
      while ($tospend <= 500);

      // Or use this under here:
      //
      // while ($tospend <= 500) {
      //   $amound = mt_rand(10,150) * 1.21;
      //   $tospend = $tospend + $amound;
      //   echo "Payed: " . round($amound, 2) . "<br>";
      // }

      // for foreach loop
      addEnter();
      $testArr = array(
        'name' => 'Me',
        'age' => 19,
        'gender' => 'men'
      );
      foreach ($testArr as $key => $value) {
        echo "$key = $value";
        addEnter();
      }

    ?>
  </body>
</html>
