<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 6 to 22</title>
    <link rel="stylesheet" href="../other/css/main.css">
  </head>
  <body>
    <?php
      /*
      functions used:
      array()
      print_r()
      var_dump()
      unset()
      array_key_exists()
      in_array()
      array_search()
      array_push()
      array_pop()
      array_shift()
      array_unshift()
      array_rand()
      array_walk()
      implode()
      explode()
      object arrays
      array_walk_recursive()
      array_merge() 
      */

      // a wrapper around echo "<br><br> $some_text <br>"
      function addBr($input) {
        echo "<br><br> $input <br>";
      }

      $basisarr = array(
        'item1',
        'item2',
        'item3',
        'item4'
      );

      // print_r()
      addBr("print_r()");
      print_r($basisarr);

      // var_dump()
      addBr("var_dump()");
      var_dump($basisarr);

      // unset()
      addBr("unset()");
      unset($basisarr[2]); // this removes the 3th item of the array because PHP starts counting by 0 NOT 1
      // $basisarr -> ["item1", "item2", "item4"]
      print_r($basisarr);

      addBr("array_key_exists()");
      $keyGevonden = array_key_exists(1,$basisarr);
      // $keyGevonden -> 1
      echo "Output: $keyGevonden";

      addBr("in_array()");
      $keyGevonden = in_array('item1',$basisarr);
      // $keyGevonden -> 1
      echo "Output: $keyGevonden";

      addBr("array_search()");
      $index = array_search('item1',$basisarr);
      // $index -> 0
      echo "Index van item: $index";

      addBr("array_push()");
      array_push($basisarr,'test1','test2','test3');
      print_r($basisarr); // -> ["item1", "item2", "item4", "test1", "test2", "test3"]

      addBr("array_pop()"); // remove the LAST item from a array
      array_pop($basisarr); // -> ["item1", "item2", "item4", "test1", "test2"]
      print_r($basisarr);

      addBr("array_shift()"); // remove the FIRST item from a array
      array_shift($basisarr); // -> ["item2", "item4", "test1", "test2"]
      print_r($basisarr);

      addBr("array_unshift()"); // add items to the begin of a array
      array_unshift($basisarr, "test4", "test5"); // -> ["test4", "test5", "item2", "item4", "test1", "test2"]
      print_r($basisarr);

      addBr("array_rand()"); // select a amoud of random items in a array
      print_r(array_rand($basisarr, 2)); // -> [2,4]

      addBr("array_walk()");
      function pintItem($item) {
        echo "name: <b>$item</b> <br>";
      }
      echo "items van array: <br>";
      array_walk($basisarr, 'pintItem');

      addBr("implode()"); // array to string
      $basisArrString = implode(" - ", $basisarr); // -> `test4 - test5 - item2 - item4 - test1 - test2`
      echo "items in `basisarr` : $basisArrString";

      addBr("explode()"); // string to array
      print_r(explode(" - ", $basisArrString)); // -> ["test4", "test5", "item2", "item4", "test1", "test2"]

      addBr("Object Arrays");
      $person = array(
        "name" => "Jan",
        "job" => "programmer",
        "secondName" => "Jaap Jan",
        "monthlyMoney" => 4000,
        "daylyMoney" => 4000 / 28
      );
      print_r($person);

      addBr("get Item from object array");
      print_r("name: " . $person["name"]); // -> "Jan"

      addBr(" array_walk_recursive() "); // ouput all items from a object array
      function printArrayItemRecursive($arrayItem) {
        echo "$arrayItem ";
      }
      array_walk_recursive($person, "printArrayItemRecursive");

      addBr(" array_merge() ");
      print_r(array_merge($basisarr, $person));

    ?>
  </body>
</html>
