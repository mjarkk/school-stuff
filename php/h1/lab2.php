<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>lab2</title>
  </head>
  <body>
    <h3>PHP lab 3</h3>
    <?php
      // create array with data
      $studenten = array(
        array(
          'naam' => "karim",
          'nederlands' => 8.5,
          'engels' => 7.7,
          'rekenen' => 6.7,
          'programmeren' => 8.5,
          'databases' => 9.4,
        ),
        array(
          'naam' => "Mij",
          'nederlands' => 9.5,
          'engels' => 8.7,
          'rekenen' => 7.7,
          'programmeren' => 3.5,
          'databases' => 10,
        )
      );

      ?>
        <table border="1">
          <caption>
            <strong>Rapport</strong>
          </caption>
          <thead>
            <tr>
              <th>Naam</th>
              <th>Nederlands</th>
              <th>Eengs</th>
              <th>Rekenen</th>
              <th>Programmeren</th>
              <th>Databases</th>
              <th>Gemiddelde</th>
            </tr>
          </thead>
          <tbody>
            <?php
              // for eatch student make a new table row
              foreach ($studenten as $student) {
                // `<?=` is a faster solution to `<?php echo`
                ?>
                  <tr>
                    <td><?= $student["naam"] ?></td>
                    <td><?= $student["nederlands"] ?></td>
                    <td><?= $student["engels"] ?></td>
                    <td><?= $student["rekenen"] ?></td>
                    <td><?= $student["programmeren"] ?></td>
                    <td><?= $student["databases"] ?></td>
                    <td><?= round(($student["nederlands"] + $student["engels"] + $student["rekenen"] + $student["programmeren"] + $student["databases"]) / 5, 1) ?></td>
                  </tr>
                <?php
              }
            ?>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="6">Groep gemiddeld</td>
              <td>
                <?php
                  // add everyting up
                  $count = 0;
                  $total = 0;
                  foreach ($studenten as $student) {
                    $total = $total + (($student["nederlands"] + $student["engels"] + $student["rekenen"] + $student["programmeren"] + $student["databases"]) / 5);
                    $count ++;
                  }
                  echo round($total / $count, 1);
                ?>
              </td>
            </tr>
          </tfoot>
        </table>
      <?php


    ?>
  </body>
</html>
