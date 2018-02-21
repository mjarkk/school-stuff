<?php

  // this php file will include the style sheets, js files and add some basic functions
  $patharr = explode("/",$_SERVER['REQUEST_URI']);
  $newpath = implode("/",array_slice($patharr,0,array_search("h1",$patharr)));
  $js = "$newpath/other/compiled-js/livereload.js";
  $style = "$newpath/other/css/main.css";
  echo "<link rel=\"stylesheet\" href=\"$style\">";
  echo "<script src=\"$js\"></script>";

  function addEnter($amound = 1) {
    if (!is_int($amound)) {
      // check if the input is not a number
      // if so set it to the default value
      $amound = 1;
    }
    for ($i=0; $i < $amound; $i++) {
      // echo the amound of times the user has asked for a enter
      echo "</br>";
    }
  }

?>
