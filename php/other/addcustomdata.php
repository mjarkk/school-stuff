<?php
  // this php file will include the style sheets and js
  $patharr = explode("/",$_SERVER['REQUEST_URI']);
  $newpath = implode("/",array_slice($patharr,0,array_search("h1",$patharr)));
  $js = "$newpath/other/compiled-js/livereload.js";
  $style = "$newpath/other/css/main.css";
  echo "<link rel=\"stylesheet\" href=\"$style\">";
  echo "<script src=\"$js\"></script>";
?>
