<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assignment 41</title>
    <?php include '../other/addcustomdata.php';?>
  </head>
  <body>
    <?php
      $prijs = 9.99;
      $track = 10;
      $albumname = "Em Um Concerto";
      $artist = "Cesaria Evora";

    ?>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <form class="order" action="op41.php" method="post">
        <tr>
          <td><?= $artist ?> "<?= $albumname ?>" track: <?= $track ?> Prijs: <?= $prijs ?></td>
        </tr>
        <tr>
          <td>
            <input type="hidden" name="total" value="001">
            <input type="hidden" name="artist" value="<?= $artist ?>">
            <input type="hidden" name="title" value="<?= $albumname ?>">
            <input type="hidden" name="track" value="<?= $track ?>">
            <input type="hidden" name="prijs" value="<?= $prijs ?>">
            <br>
            aantal: <input type="text" size="2" maxlength="3" name="total" value="001">
          </td>
        </tr>
        <tr>
          <td>
            Discount: <br>
            <input type="checkbox" name="student" value="15"> Student 15%<br>
            <input type="checkbox" name="senior" value="10"> senior 10%<br>
            <input type="checkbox" name="klant" value="5"> Student 5%<br>
          </td>
        </tr>
        <tr>
          <td>Send: <input type="submit" name="submit" value="Submit"></td>
        </tr>
      </form>
    </table>
    <div class="rest">
      <?php
        if ($_POST["submit"]) {
          echo "<h2>Data sended to the server</h2>";
          echo json_encode($_POST);

        }
      ?>
    </div>
  </body>
</html>
