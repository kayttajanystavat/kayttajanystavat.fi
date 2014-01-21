<?php
$yhteys = mysql_connect($dbhost, $dbuser, $dbpass) or die ("Tietokantapalvelimeen yhdistäminen epäonnistui.");
mysql_select_db($dbname);
?>
