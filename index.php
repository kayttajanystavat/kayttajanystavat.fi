<?php
session_start();
ob_start();
// utf8
header('Content-Type: text/html; charset=utf-8');

// php:n virheilmoitukset
// error_reporting(E_ALL);
// ini_set("display_errors", 1);

// tietokantayhteyden avaaminen
include "library/asetukset.php";
include "library/avaa_db.php";

// admin
if(preg_match('/^kayllapito$/', $_GET['admin'])) {
    $onAdmin = true;
}

// pageloader
if(preg_match('/^(etusivu|yhdistys|tapahtumat|liity|yhteys|403|404|500|aktivoi|kiitos|kirjaudu|yllapito|ilmoittaudu|tiedosto|rekisteriseloste)$/',$_GET['s']) ) {
  $sivu = $_GET['s'];
} else {
  $sivu = "etusivu";
}
$sivun_title = array("etusivu" => "- Etusivu",
	                "yhdistys" => "- Yhdistys",
                     "tapahtumat" => "- Tapahtumat",
                     "liity" => "- Liity jäseneksi!",
                     "yhteys" => "- Yhteystiedot",
                     "403" => "- Pääsy kielletty!",
                     "404" => "- Sivua ei löytynyt",
                     "500" => "- Virhe",
                     "aktivoi" => "- Tunnuksen aktivointi",
                     "kiitos" => "- Kiitos!",
                     "kirjaudu" => "- Kirjaudu sisään",
                     "yllapito" => "- Ylläpito",
                     "ilmoittaudu" => "- Ilmoittaudu");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Käyttäjän ystävät <?php echo $sivun_title[$sivu]; ?></title>
    <meta name="description" content="Käyttäjän ystävät ry on käytettävyysopiskelijoiden ja muiden alasta kiinnostuneiden poikkitieteellinen yhdistys." /> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=0.4" />
    <link type="text/css" rel="stylesheet" href="/css/tyyli.css" media="screen" />
    <link type="text/css" rel="stylesheet" href="/css/cupertino/jquery-ui-1.8.6.custom.css" />
    <script type="text/javascript" src="/js/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="/js/jquery-ui-1.8.6.custom.min.js"></script>
    <script type="text/javascript" src="/js/responsiveslides.min.js"></script>
    <script type="text/javascript" src="/js/kay.js"></script>
    <link rel="icon" type="image/png" href="/images/kay-favicon.png" />
    <script>
      $(function () {
        $("#slides").responsiveSlides();
      });
    </script>
  </head>
  <body>
    <div id="taustavari">
      <div id="kaikki">
        <div id="otsikko">
          <?php include "pages/otsikko";?>
        </div>
        <div id="sisalto">
          <?php include "pages/$sivu";?>
        </div>
        <div id="valikko">
          <?php include "pages/valikko";?>
        </div>
        <div id="omavalikko">
          <?php include "pages/omavalikko";?>
        </div>
        <div id="alatunniste">
          <?php include "pages/alatunniste";?>
        </div>
      </div> <!-- kaikki -->
    </div> <!-- taustavari -->
  <div id="taustavari-ala"></div>
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-25774316-1']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
  </body>
  <?php
  // tietokantayhteyden sulkeminen
  include "library/sulje_db.php";
  ob_end_flush();
  ?>
  <!-- admin? <?= $onAdmin ? 'yes' : 'no' ?> -->
</html>
