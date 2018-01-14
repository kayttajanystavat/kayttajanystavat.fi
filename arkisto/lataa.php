<?php
include "../library/asetukset.php";
include "../library/avaa_db.php";

$fid = mysql_real_escape_string($_GET['fid']);

$sql_arkisto = "SELECT id, tiedosto, arkistotiedosto, tyyppi FROM Arkisto WHERE id='$fid' AND visible='1'";
$result_arkisto = mysql_query($sql_arkisto);

if(mysql_num_rows($result_arkisto) == 1)
{
  $rivi_arkisto = mysql_fetch_row($result_arkisto);
  $arkisto_id = $rivi_arkisto[0];
  $arkisto_downloadName = $rivi_arkisto[1];
  $arkisto_systemName = $rivi_arkisto[2];
  $arkisto_mimeType = $rivi_arkisto[3];
  header('Content-type: '.$arkisto_mimeType);
  header('Content-Disposition: attachment; filename='.$arkisto_downloadName);
  readfile($arkisto_systemName);
}

include "../library/sulje_db.php";
header('Location: https://kayttajanystavat.fi/yhdistys/arkisto');
exit;
?>
