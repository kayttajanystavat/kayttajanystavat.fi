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

// Checkbox-kuvan preload
if (document.images) {
    img1 = new Image();
    img1.src = "kay-luukku-ruksittu.png";
    // img2 = new Image();
    // img2.src = "image.jpg";
    // jne.
}


// Tätä käytetään jäsenhakemuksen checkboxien muotoilussa.
// Alkuperäisen skriptin on tehnyt Chris Erwin (kts. www.chriserwin.com/scripts/crir/)
crir = {
	userAgent: '',
	isSafari: false,
	init: function() {
		
		this.userAgent = navigator.userAgent.toLowerCase();
		this.isSafari = ((this.userAgent.indexOf('safari')!=-1)&&(this.userAgent.indexOf('mac')!=-1))?true:false;
		
		if (! this.isSafari) { // the script doesn't work in safari.
			arrLabels = document.getElementsByTagName('label');
		
			searchLabels:
			for (var i=0; i<arrLabels.length; i++) {			
				// get the input element based on the for attribute of the label tag
				if (arrLabels[i].getAttributeNode('for') && arrLabels[i].getAttributeNode('for').value != '') {
					labelElementFor = arrLabels[i].getAttributeNode('for').value;				
					inputElement = document.getElementById(labelElementFor);
				}
				else {				
					continue searchLabels;
				}	
								
				inputElementClass = inputElement.className;	
			
				// if the input is specified to be hidden intiate it
				if (inputElementClass == 'crirHiddenJS') {
					inputElement.className = 'crirHidden';
					
					inputElementType = inputElement.getAttributeNode('type').value;	
					
					// add the appropriate event listener to the input element
					if (inputElementType == "checkbox") {
						inputElement.onclick = crir.toggleCheckboxLabel;
					}
					else {
						inputElement.onclick = crir.toggleRadioLabel;
					}
					
					// set the initial label state
					if (inputElement.checked) {
						if (inputElementType == 'checkbox') { arrLabels[i].className = 'checkbox_checked'}
						else { arrLabels[i].className = 'radio_checked' }
					}
					else {
						if (inputElementType == 'checkbox') { arrLabels[i].className = 'checkbox_unchecked'}
						else { arrLabels[i].className = 'radio_unchecked' }
					}
				}
				else if (inputElement.nodeName != 'SELECT' && inputElement.getAttributeNode('type').value == 'radio') { // this so even if a radio is not hidden but belongs to a group of hidden radios it will still work.
					arrLabels[i].onclick = crir.toggleRadioLabel;
					inputElement.onclick = crir.toggleRadioLabel;
				}
			}
		}
	},	
	
	findLabel: function (inputElementID) {
		arrLabels = document.getElementsByTagName('label');
	
		searchLoop:
		for (var i=0; i<arrLabels.length; i++) {
			if (arrLabels[i].getAttributeNode('for') && arrLabels[i].getAttributeNode('for').value == inputElementID) {				
				return arrLabels[i];
				break searchLoop;				
			}
		}		
	},	
	
	toggleCheckboxLabel: function () {
		labelElement = crir.findLabel(this.getAttributeNode('id').value);
	
		if(labelElement.className == 'checkbox_checked') {
			labelElement.className = "checkbox_unchecked";
		}
		else {
			labelElement.className = "checkbox_checked";
		}
	},	
	
	toggleRadioLabel: function () {			 
		clickedLabelElement = crir.findLabel(this.getAttributeNode('id').value);
		
		clickedInputElement = this;
		clickedInputElementName = clickedInputElement.getAttributeNode('name').value;
		
		arrInputs = document.getElementsByTagName('input');
	
		// uncheck (label class) all radios in the same group
		for (var i=0; i<arrInputs.length; i++) {			
			inputElementType = arrInputs[i].getAttributeNode('type').value;
			if (inputElementType == 'radio') {
				inputElementName = arrInputs[i].getAttributeNode('name').value;
				inputElementClass = arrInputs[i].className;
				// find radio buttons with the same 'name' as the one we've changed and have a class of chkHidden
				// and then set them to unchecked
				if (inputElementName == clickedInputElementName && inputElementClass == 'crirHidden') {				
					inputElementID = arrInputs[i].getAttributeNode('id').value;
					labelElement = crir.findLabel(inputElementID);
					labelElement.className = 'radio_unchecked';
				}
			}
		}
	
		// if the radio clicked is hidden set the label to checked
		if (clickedInputElement.className == 'crirHidden') {
			clickedLabelElement.className = 'radio_checked';
		}
	},
	
	addEvent: function(element, eventType, doFunction, useCapture){
		if (element.addEventListener) 
		{
			element.addEventListener(eventType, doFunction, useCapture);
			return true;
		} else if (element.attachEvent) {
			var r = element.attachEvent('on' + eventType, doFunction);
			return r;
		} else {
			element['on' + eventType] = doFunction;
		}
	}
}

crir.addEvent(window, 'load', crir.init, false);

