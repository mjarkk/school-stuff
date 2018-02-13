<?php
include '../other/addcustomdata.php';
// this file gets the data from op27.php
// This will just return what you have send to the server
if (isset($_POST["submit"])) {
  echo json_encode($_POST);
  die();
} else {
  http_response_code(404);
  echo "{}";
  die();
}
?>
