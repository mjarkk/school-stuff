<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 42</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <div class="inputdata">
      <p>Selecteer een land</p>
      <form action="op42.php" method="post">
        <select name="land">
          <option value="nl" selected="selected">Netherlands</option>
          <option value="be">Belgium</option>
          <option value="en">Engeland</option>
          <option value="fa">France</option>
        </select>
        <input type="submit" name="submit" value="Send">
      </form>
    </div>
    <?php
      if (isset($_POST['submit'])) {
        echo "<h2>Chosen land: " . $_POST['land'] . "</h2>";
      }
    ?>
  </body>
</html>
