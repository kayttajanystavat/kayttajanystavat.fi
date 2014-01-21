<?php header('Content-Type: text/html; charset=utf-8'); 
// tietokantayhteyden avaaminen
include "/home/kay/www-data/library/asetukset.php";
include "/home/kay/www-data/library/avaa_db.php";
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$feedback_ok = false;
$virheita = false;
if (ISSET($_POST["laheta"]))
{
	$etunimi = mysql_real_escape_string($_POST['etunimi']);
	$sukunimi = mysql_real_escape_string($_POST['sukunimi']);
	$email = mysql_real_escape_string($_POST['email']);
	$koulu = mysql_real_escape_string($_POST['koulu']);
	$puhelin = mysql_real_escape_string($_POST['puhelin']);
	$yhdistys = mysql_real_escape_string($_POST['yhdistys']);
	$allergia = mysql_real_escape_string($_POST['allergia']);
	$etunimi_pituus = mb_strlen($etunimi);
	$sukunimi_pituus = mb_strlen($sukunimi);
	$email_pituus = mb_strlen($email);
	$koulu_pituus = mb_strlen($koulu);

	// etunimi
  	if($etunimi_pituus < 2) 
  	{
    		$virheita = true;
    		$etunimi_virhe = "Etunimi on pakollinen kenttä.";
  	}
  	if($etunimi_pituus > 32)
  	{
    		$virheita = true;
    		$etunimi_virhe = "Etunimi on liian pitkä ($etunimi_pituus merkkiä). Maksimipituus on 32 merkkiä.";
  	}

	// sukunimi
  	if($sukunimi_pituus < 2) 
  	{
    		$virheita = true;
    		$sukunimi_virhe = "Sukunimi on pakollinen kenttä.";
  	}
  	if($sukunimi_pituus > 32)
  	{
    		$virheita = true;
    		$sukunimi_virhe = "Sukunimi on liian pitkä ($sukunimi_pituus merkkiä). Maksimipituus on 32 merkkiä.";
  	}

	// sähköposti
  	if($email_pituus < 2) 
  	{
    		$virheita = true;
    		$email_virhe = "Sähköposti on pakollinen kenttä.";
  	}
  	if($email_pituus > 128)
  	{
    		$virheita = true;
    		$email_virhe = "Sähköpostiosoite on liian pitkä ($email_pituus merkkiä). Maksimipituus on 128 merkkiä.";
  	}

	if($virheita == false)
  	{
		$nimikantaan = $etunimi . " " . $sukunimi;
		$lisatiedot = "email: $email ja yhdistys: $yhdistys ja koulu: $koulu ja puhelin: $puhelin ja allergiat: $allergia";
		$sql_lisays = "INSERT INTO Tapahtumailmoittautumiset VALUES(null, '$nimikantaan', '5', NOW(), '1', null, '$lisatiedot', null, '0', null, null)";
		mysql_query($sql_lisays) or die("Ongelmia tietojen lisäämisessä tietokantaan." . mysql_error());
		$feedback_ok = true;
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Käyttäjän ystävät - IBM-ekskursio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="/css/tyyli.css" media="screen" />
    <script type="text/javascript" src="/js/kay.js"></script>
    <link rel="icon" type="image/png" href="/images/kay-favicon.png" />
    <style type="text/css">
table td{vertical-align: text-top;}
table td.oikea{border-left: 1px dotted #ccc; border-bottom: 1px dotted #ccc; padding: 5px 0px 5px 10px;}
table td.vasen{padding: 5px 10px 5px 0px; border-bottom: 1px dotted #ccc;}
    </style>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-21037700-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
  </head>
  <body>
	    <div id="taustavari">
	      <div id="kaikki">
	        <div id="otsikko">

	        </div>
	        <div id="sisalto">
		<div style="margin-top: 20px; margin-left: -170px">
			<p>Käyttäjän ystävät ry</p>
			<h1 style="margin-top: 0px">IBM Interactive -ekskursio 15.3.2011</h1>
			<?php
			if($feedback_ok == true)
			{
				echo "<p>Kiitos, ilmoittautumisesi on kirjattu. Olet jonossa ja ilmoitamme, jos paikkoja vapautuu.</p>";
				echo "<p>Ilmoitathan (puh. 0405604290 tai thusu@cs.helsinki.fi), jos et pääsekään osallistumaan.</p>";
				echo "<a href=\"http://kay.ayy.fi/ibm-ekskursio/\">Takaisin tapahtuman tietoihin</a>";
			}
			else
			{
			?>
			<table>
			<tr><td class="vasen">Ajankohta</td><td class="oikea">Ti 15.3.2011 klo 16.00</td></tr>
			<tr><td class="vasen">Sijainti</td><td class="oikea"><a href="http://www-05.ibm.com/fi/contact/ibmhelsinki.html">IBM Munkkiniemi, Laajalahdentie 23, Helsinki</a></td></tr>
			<tr><td class="vasen">Ilmoittautuminen</td><td class="oikea">Pe 4.3. klo 14 mennessä</td></tr>
			<tr><td class="vasen">Vastuuhenkilö</td><td class="oikea"><a href="mailto:thusu@cs.helsinki.fi">Tuomas Husu</a>, puh. 040 560 4290</td></tr>
			<tr><td class="vasen">Kuvaus</td><td class="oikea">
				<div style="line-height:1.2;">
					<p style="margin-left: 0px">Oletko kiinnostunut käyttäjäkokemuksesta ja ketterästä ohjelmistokehityksestä? Oletko opinnoissasi jo loppuvaiheessa? Tule kuulemaan, mitä IBM voi sinulle tarjota.</p>
					<p style="margin-left: 0px">Ohjelmassa<ul><li>Smarter Planet: kuinka IBM on mukana ratkaisemassa planeettamme isoja haasteita</li><li><a href="http://www-05.ibm.com/innovation/fi/ideasfromibm/library/watson/">Watson</a>: mitä Jeopardyn jälkeen</li><li>IBM Interactive Suomessa</li><li>IBM Suomen trainee-ohjelma</li></ul></p>
					<p style="margin-left: 0px">Tiistaina 15.3. klo 16-19 + sauna</p>
					<p style="margin-left: 0px">Mukaan ovat tervetulleita Käyttäjän ystävien ja Athenen jäsenet.</p>
					<p style="margin-left: 0px">
					<a href="http://www.ibm.com/">http://www.ibm.com/</a><br />
					<a href="http://www.ibm.com/fi/fi/">http://www.ibm.com/fi/fi/</a>
					</p>
					<br /><img src="IBM_logo.jpg" height="50px" /><br />
				</div>
			</td></tr>
			<tr><td class="vasen">Osallistujat</td><td class="oikea">
<?php
// haetaan osallistujalista ja osallistujien lkm
$sql_osallistujat = "SELECT id, nimi FROM Tapahtumailmoittautumiset WHERE tapahtuma_id='5' AND id > 7 ORDER BY ilmo_pvm ASC";
$result_osallistujat = mysql_query($sql_osallistujat);
$ilmoittautuneita = mysql_num_rows($result_osallistujat);
  $osallistujalista = "<ol class=\"osallistujalista\">";
  while($row_osallistujat = mysql_fetch_assoc($result_osallistujat))
  {
	if($row_osallistujat["id"] < 31)
	{
	    $osallistujalista .= "<li>" . $row_osallistujat["nimi"] . "</li>";		
	}
	else
	{
	    $osallistujalista .= "<li style=\"color: #999\">" . $row_osallistujat["nimi"] . "</li>";
	}
  }
  $osallistujalista .= "</ol>";
echo "<a class=\"tooltip tooltip_normaali\" name=\"osallistujat\" href=\"#osallistujat\">$ilmoittautuneita / 12<span 
class=\"classic\">$osallistujalista</span></a>";
?>				
				</td></tr>
			<tr><td class="vasen">Suora linkki</td><td class="oikea"><a href="http://kay.ayy.fi/ibm-ekskursio/">http://kay.ayy.fi/ibm-ekskursio/</a></td></tr>
			<tr><td class="vasen"><strong>Ilmoittaudu!</strong></td>
				<td class="oikea"><p style="margin-left: 0px">Tapahtuma on toistaiseksi täynnä, mutta jonoon voi edelleen ilmoittautua.</p>
					<form action="/ibm-ekskursio/" method="post">
					Etunimi * <?php if(($virheita == true) AND ISSET($etunimi_virhe)) echo "<br /><span style=\"background-color: red; padding: 5px; color: #fff;\">" . $etunimi_virhe . "</span>"; ?><br /><input type="text" name="etunimi" maxlength="64" style="margin: 5px 0px 15px 0px; padding: 3px; width: 200px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					Sukunimi * <?php if(($virheita == true) AND ISSET($sukunimi_virhe)) echo "<br /><span style=\"background-color: red; padding: 5px; color: #fff;\">" . $sukunimi_virhe . "</span>"; ?><br /><input type="text" name="sukunimi" maxlength="64" style="margin: 5px 0px 15px 0px; padding: 3px; width: 200px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					Sähköposti * <?php if(($virheita == true) AND ISSET($email_virhe)) echo "<br /><span style=\"background-color: red; padding: 5px; color: #fff;\">" . $email_virhe . "</span>"; ?><br /><input type="text" name="email" maxlength="128" style="margin: 5px 0px 15px 0px; padding: 3px; width: 300px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					Opiskelupaikka ja -linja<br /><input type="text" name="koulu" maxlength="128" style="margin: 5px 0px 15px 0px; padding: 3px; width: 300px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					Puhelinnumero<br /><input type="text" name="puhelin" maxlength="16" style="margin: 5px 0px 15px 0px; padding: 3px; width: 300px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					Yhdistys<br />
					<input type="radio" name="yhdistys" value="kay" style="margin: 5px 5px 0px 5px" />Käyttäjän ystävät<br />
					<input type="radio" name="yhdistys" value="athene" style="margin: 5px 5px 15px 5px" />Athene<br />
					Ruoka-allergiat<br /><input type="text" name="allergia" maxlength="64" style="margin: 5px 0px 15px 0px; padding: 3px; width: 300px; font: bold 105% helvetica,arial,verdana; color: #000; border: 1px solid #000;" /><br />
					<input type="submit" value="Ilmoittaudun" name="laheta" style="margin: 15px 0px 0px 0px; background-color: #f0f0f0; border: 1px solid #000; font: bold 105% helvetica,arial,verdana; color: #3399cc; height: 2em; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;" />
					</form>
					
					</td></tr>
			
			</table>
			<?php } ?>		
			
		</div>

	        </div>
	        <div id="valikko">
	        </div>
	        <div id="omavalikko">
	        </div>
	        <div id="alatunniste">
	        </div>
	      </div> <!-- kaikki -->
	    </div> <!-- taustavari -->
	  <div id="taustavari-ala"></div>
  </body>
<?php include "/home/kay/www-data/library/sulje_db.php"; ?>
</html>
