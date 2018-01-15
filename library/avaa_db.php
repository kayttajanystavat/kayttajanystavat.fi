<?php
$yhteys = mysql_connect($dbhost, $dbuser, $dbpass) or die ("Tietokantapalvelimeen yhdistäminen epäonnistui.");
mysql_set_charset("utf8");
mysql_select_db($dbname);
?>
