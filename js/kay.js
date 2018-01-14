$(function() {
  $( "#datepicker" ).datepicker();
  $('#dialog').dialog({
    autoOpen: false,
    width: 600,
    buttons: {
      "Ok": function() {
        $(this).dialog("close");
      }//,
      //"Cancel": function() {
      //  $(this).dialog("close");
      //}
    }
  });
  $('#dialog_link').click(function(){
    $('#dialog').dialog('open');
    return false;
  });
  $('#dialog_link, ul#icons li').hover(
    function() { $(this).addClass('ui-state-hover'); },
    function() { $(this).removeClass('ui-state-hover'); }
  );
  $( "#master" ).slider({
    value: 50,
    orientation: "horizontal",
    range: "min",
    min: 1,
    max: 100,
    slide: function( event, ui ) {
     $( "#amount" ).val( ui.value );
    },
    animate: true
  });
  $( "#amount" ).val( $( "#master" ).slider( "value") );

  $( "#pompotusnappi" ).click(function() {
    $( "#pallo" ).effect( pulsate, options, 500 );
  });

});

$(function() {
	var suomenKunnat = [
"Akaa", "Alajärvi", "Alavieska", "Alavus", "Artjärvi", "Asikkala", "Askola", "Aura", "Brändö", "Eckerö", "Enonkoski", "Enontekiö", "Espoo", "Eura", "Eurajoki", "Evijärvi", "Finström", "Forssa", "Föglö", "Geta", "Haapajärvi", "Haapavesi", "Hailuoto", "Halsua", "Hamina", "Hammarland", "Hankasalmi", "Hanko", "Harjavalta", "Hartola", "Hattula", "Haukipudas", "Hausjärvi", "Heinola", "Heinävesi", "Helsinki", "Hirvensalmi", "Hollola", "Honkajoki", "Huittinen", "Humppila", "Hyrynsalmi", "Hyvinkää", "Hämeenkoski", "Hämeenkyrö", "Hämeenlinna", "Ii", "Iisalmi", "Iitti", "Ikaalinen", "Ilmajoki", "Ilomantsi", "Imatra", "Inari", "Inkoo", "Isojoki", "Isokyrö", "Jalasjärvi", "Janakkala", "Joensuu", "Jokioinen", "Jomala", "Joroinen", "Joutsa", "Juankoski", "Juuka", "Juupajoki", "Juva", "Jyväskylä", "Jämijärvi", "Jämsä", "Järvenpää", "Kaarina", "Kaavi", "Kajaani", "Kalajoki", "Kangasala", "Kangasniemi", "Kankaanpää", "Kannonkoski", "Kannus", "Karijoki", "Karjalohja", "Karkkila", "Karstula", "Karttula", "Karvia", "Kaskinen", "Kauhajoki", "Kauhava", "Kauniainen", "Kaustinen", "Keitele", "Kemi", "Kemijärvi", "Keminmaa", "Kemiönsaari", "Kempele", "Kerava", "Kerimäki", "Kesälahti", "Keuruu", "Kihniö", "Kiikoinen", "Kiiminki", "Kinnula", "Kirkkonummi", "Kitee", "Kittilä", "Kiuruvesi", "Kivijärvi", "Kokemäki", "Kokkola", "Kolari", "Konnevesi", "Kontiolahti", "Korsnäs", "Koski Tl", "Kotka", "Kouvola", "Kristiinankaupunki", "Kruunupyy", "Kuhmalahti", "Kuhmo", "Kuhmoinen", "Kumlinge", "Kuopio", "Kuortane", "Kurikka", "Kustavi", "Kuusamo", "Kylmäkoski", "Kyyjärvi", "Kärkölä", "Kärsämäki", "Kökar", "Köyliö", "Lahti", "Laihia", "Laitila", "Lapinjärvi", "Lapinlahti", "Lappajärvi", "Lappeenranta", "Lapua", "Laukaa", "Lavia", "Lemi", "Lemland", "Lempäälä", "Leppävirta", "Lestijärvi", "Lieksa", "Lieto", "Liminka", "Liperi", "Lohja", "Loimaa", "Loppi", "Loviisa", "Luhanka", "Lumijoki", "Lumparland", "Luoto", "Luumäki", "Luvia", "Länsi-Turunmaa", "Maalahti", "Maaninka", "Maarianhamina", "Marttila", "Masku", "Merijärvi", "Merikarvia", "Miehikkälä", "Mikkeli", "Muhos", "Multia", "Muonio", "Mustasaari", "Muurame", "Mynämäki", "Myrskylä", "Mäntsälä", "Mänttä-Vilppula", "Mäntyharju", "Naantali", "Nakkila", "Nastola", "Nilsiä", "Nivala", "Nokia", "Nousiainen", "Nummi-Pusula", "Nurmes", "Nurmijärvi", "Närpiö", "Oravainen", "Orimattila", "Oripää", "Orivesi", "Oulainen", "Oulu", "Oulunsalo", "Outokumpu", "Padasjoki", "Paimio", "Paltamo", "Parikkala", "Parkano", "Pedersören kunta", "Pelkosenniemi", "Pello", "Perho", "Pertunmaa", "Petäjävesi", "Pieksämäki", "Pielavesi", "Pietarsaari", "Pihtipudas", "Pirkkala", "Polvijärvi", "Pomarkku", "Pori", "Pornainen", "Porvoo", "Posio", "Pudasjärvi", "Pukkila", "Punkaharju", "Punkalaidun", "Puolanka", "Puumala", "Pyhtää", "Pyhäjoki", "Pyhäjärvi", "Pyhäntä", "Pyhäranta", "Pälkäne", "Pöytyä", "Raahe", "Raasepori", "Raisio", "Rantasalmi", "Ranua", "Rauma", "Rautalampi", "Rautavaara", "Rautjärvi", "Reisjärvi", "Riihimäki", "Ristiina", "Ristijärvi", "Rovaniemi", "Ruokolahti", "Ruovesi", "Rusko", "Rääkkylä", "Saarijärvi", "Salla", "Salo", "Saltvik", "Sastamala", "Sauvo", "Savitaipale", "Savonlinna", "Savukoski", "Seinäjoki", "Sievi", "Siikainen", "Siikajoki", "Siikalatva", "Siilinjärvi", "Simo", "Sipoo", "Siuntio", "Sodankylä", "Soini", "Somero", "Sonkajärvi", "Sotkamo", "Sottunga", "Sulkava", "Sund", "Suomenniemi", "Suomussalmi", "Suonenjoki", "Sysmä", "Säkylä", "Taipalsaari", "Taivalkoski", "Taivassalo", "Tammela", "Tampere", "Tarvasjoki", "Tervo", "Tervola", "Teuva", "Tohmajärvi", "Toholampi", "Toivakka", "Tornio", "Turku", "Tuusniemi", "Tuusula", "Tyrnävä", "Töysä", "Ulvila", "Urjala", "Utajärvi", "Utsjoki", "Uurainen", "Uusikaarlepyy", "Uusikaupunki", "Vaala", "Vaasa", "Valkeakoski", "Valtimo", "Vantaa", "Varkaus", "Varpaisjärvi", "Vehmaa", "Vesanto", "Vesilahti", "Veteli", "Vieremä", "Vihanti", "Vihti", "Viitasaari", "Vimpeli", "Virolahti", "Virrat", "Vårdö", "Vähäkyrö", "Vöyri-Maksamaa", "Yli-Ii", "Ylitornio", "Ylivieska", "Ylöjärvi", "Ypäjä", "Ähtäri", "Äänekoski"
	];
	$( "#kotikunta" ).autocomplete({
		minLength: 2,
		delay: 0,
		source: function(req, responseFn) {
			var re = $.ui.autocomplete.escapeRegex(req.term);
			var matcher = new RegExp( "^" + re, "i" );
			var a = $.grep( suomenKunnat, function(item,index){
				return matcher.test(item);
			});
			responseFn( a );
		}
	});
});

$(document).ready(function(){
    $('#laheta').click(function() {
        $('#latauskuvake').show();
    });
});

// Lomakkeiden autofokus
$(document).ready(function() {
  $("input[type='text']:first", document.forms[0]).focus();
});
