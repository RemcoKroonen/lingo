start.setAttribute("onClick", "javascript:startspel();");
document.getElementById('controleren').style.visibility = 'hidden';
document.getElementById('nieuwwoord').style.visibility = 'hidden';
document.getElementById('row1').style.visibility = 'hidden';
document.getElementById('row2').style.visibility = 'hidden';
document.getElementById('row3').style.visibility = 'hidden';
document.getElementById('row4').style.visibility = 'hidden';
document.getElementById('row5').style.visibility = 'hidden';
document.getElementById('opnieuw').style.visibility = 'hidden';
var gekozenwoord = "";
var rij = 0;
var words = [
"appel",
"aldus",
"afwas",
"aftel",
"aarde",
"armen",
"actie",
"apart",
"adres",
"avond",
"aders",
"alarm",
"boten",
"balen",
"beter",
"bomen",
"boren",
"boven",
"boxen",
"brood",
"broek",
"brand",
"breed",
"benen",
"beeld",
"brief",
"beten",
"basis",
"blauw",
"beren",
"buren",
"banen",
"bloed",
"broer",
"blond",
"boter",
"beleg",
"breng",
"baken",
"beker",
"blind",
"bezig",
"baden",
"bedel",
"bazen",
"bazin",
"baren",
"beden",
"beken",
"bezem",
"baard",
"bidet",
"breuk",
"conus",
"cello",
"creme",
"cloud",
"cacao",
"cadet",
"cavia",
"ceder",
"combi",
"china",
"clown",
"draai",
"deden",
"dalen",
"derde",
"delen",
"dwaas",
"daden",
"dader",
"dames",
"diner",
"datum",
"dozen",
"dreun",
"duits",
"dagen",
"deren",
"dwerg",
"dwaal",
"dwing",
"druil",
"droog",
"draad",
"dweil",
"drank",
"duren",
"dwars",
"drugs",
"daten",
"daler",
"doorn",
"disco",
"degen",
"droom",
"dient",
"drone",
"dadel",
"duwen",
"druif",
"deken",
"deler",
"elven",
"eigen",
"enger",
"engel",
"elder",
"enkel",
"effen",
"email",
"egaal",
"fiets",
"friet",
"files",
"forel",
"films",
"feest",
"fruit",
"falen",
"flora",
"fauna",
"feeen",
"freak",
"forum",
"fusie",
"geven",
"gaven",
"groen",
"graai",
"getal",
"grens",
"grond",
"groef",
"graal",
"gewei",
"games",
"grote",
"groet",
"garen",
"gebak",
"graag",
"genre",
"glans",
"geluk",
"geeuw",
"horen",
"heren",
"halen",
"hagel",
"haren",
"helen",
"harde",
"hemel",
"hoofd",
"huren",
"hamer",
"haken",
"heden",
"hotel",
"hobby",
"heler",
"hoger",
"ieder",
"index",
"immer",
"icoon",
"inlog",
"inzet",
"innig",
"jovel",
"jaren",
"jicht",
"jabot",
"jacht",
"jaden",
"jagen",
"jager",
"japon",
"jarig",
"jawel",
"jeans",
"jemig",
"jeugd",
"joint",
"jonas",
"joule",
"koken",
"kreet",
"koker",
"kerst",
"kegel",
"koude",
"kader",
"krent",
"kamer",
"kaars",
"kaart",
"kraan",
"krant",
"keren",
"kruid",
"kerel",
"kubus",
"kraal",
"kleur",
"kroon",
"klein",
"korst",
"klopt",
"kabel",
"kunst",
"kopje",
"krans",
"klimt",
"kater",
"klink",
"kudde",
"kruis",
"lopen",
"laten",
"lepel",
"links",
"laden",
"leven",
"lezen",
"lucht",
"lenen",
"laser",
"lente",
"licht",
"lader",
"leder",
"lunch",
"lijst",
"leger",
"leden",
"legen",
"lagen",
"lezer",
"lever",
"lingo",
"loper",
"luier",
"lager",
"leeuw",
"maand",
"malen",
"maken",
"media",
"meter",
"motor",
"maten",
"markt",
"mazen",
"molen",
"meest",
"meren",
"model",
"meden",
"maden",
"macht",
"meeuw",
"mager",
"magen",
"maren",
"manen",
"noord",
"nieuw",
"negen",
"namen",
"neven",
"nodig",
"naden",
"neder",
"nemen",
"onder",
"optel",
"ovaal",
"ovale",
"onwel",
"optie",
"orden",
"oppas",
"ouder",
"ophef",
"oases",
"palen",
"plein",
"pegel",
"paars",
"prijs",
"piano",
"pixel",
"paden",
"pasta",
"pizza",
"poten",
"paard",
"puber",
"pauze",
"preek",
"polis",
"pater",
"proef",
"panda",
"penis",
"prins",
"pluto",
"polen",
"plint",
"quota",
"quant",
"quark",
"queue",
"quilt",
"quote",
"robot",
"reken",
"raden",
"regen",
"radio",
"rente",
"regio",
"rugby",
"reden",
"roken",
"ruzie",
"ruist",
"regel",
"racen",
"races",
"riool",
"ramen",
"radar",
"roman",
"rokje",
"razen",
"roede",
"staan",
"staal",
"speel",
"steeg",
"stoel",
"stook",
"steek",
"schep",
"spijs",
"stoep",
"shirt",
"samen",
"sites",
"sport",
"spalk",
"sjaal",
"storm",
"staat",
"steun",
"strak",
"serie",
"shows",
"schat",
"snoep",
"sfeer",
"smeer",
"speer",
"scene",
"speld",
"smeed",
"smaak",
"super",
"stand",
"steer",
"smelt",
"sedan",
"skier",
"sluis",
"sneer",
"steel",
"truck",
"terug",
"typen",
"talen",
"taboe",
"tegel",
"taart",
"tafel",
"trouw",
"teken",
"teren",
"taken",
"treur",
"tenen",
"titel",
"thuis",
"tiara",
"teder",
"toets",
"tabak",
"trein",
"tarwe",
"telen",
"teler",
"uiten",
"uilig",
"uitje",
"uiver",
"ultra",
"uniek",
"uppie",
"uraan",
"uiers",
"velen",
"vloer",
"video",
"varen",
"vegen",
"veren",
"vader",
"vaten",
"vuren",
"vrouw",
"vlees",
"vogel",
"vroeg",
"vezel",
"veins",
"vorst",
"veder",
"vanaf",
"vieze",
"veger",
"villa",
"veler",
"vrede",
"vries",
"woord",
"wagen",
"wonen",
"waren",
"warme",
"weten",
"water",
"weren",
"wazig",
"wegen",
"weven",
"wezen",
"weken",
"wraak",
"wilde",
"wreed",
"wrede",
"wenst",
"woest",
"xenon",
"yacht",
"yucca",
"zwaar",
"zware",
"zesde",
"zagen",
"zalig",
"zomer",
"zeden",
"zwart",
"zeven",
"zicht",
"zadel",
"zweet",
"zenuw",
"zweer",
"zweef",
"zaden",
"zaken",
"zeker",
"zever",
"zeeen"];


function startspel(){
	debugger;
	gekozenwoord = words[Math.round(Math.random()*(words.length-1))];
	document.getElementById('0_0').value = gekozenwoord.charAt(0);
	document.getElementById('start').style.visibility = 'hidden';
	document.getElementById('opnieuw').style.visibility = 'hidden';
	document.getElementById('nieuwwoord').style.visibility = 'hidden';
	document.getElementById('controleren').style.visibility = 'visible';
	//document.getElementById('controleren').onClick = "javascript:controleren();";
	controleren.setAttribute("onClick", "javascript:controleenwoord();");
	document.getElementById('row1').style.visibility = 'visible';
	document.getElementById('row2').style.visibility = 'visible';
	document.getElementById('row3').style.visibility = 'visible';
	document.getElementById('row4').style.visibility = 'visible';
	document.getElementById('row5').style.visibility = 'visible';


	
}
function controleenwoord(){
	debugger;
	
	if (iswoordgoed()) {
		for (var teller = 0; teller <= 4; teller++) {


			if (gekozenwoord.charAt(teller) == document.getElementById(rij.toString()+"_"+teller.toString()).value) {
				document.getElementById(rij.toString()+"_"+teller.toString()).style.backgroundColor = "red";
			}
			
		}
		alert('woord is goed');
		document.getElementById('controleren').style.visibility = 'hidden';
			document.getElementById('row1').style.visibility = 'hidden';
			document.getElementById('row2').style.visibility = 'hidden';
			document.getElementById('row3').style.visibility = 'hidden';
			document.getElementById('row4').style.visibility = 'hidden';
			document.getElementById('row5').style.visibility = 'hidden';
			document.getElementById('opnieuw').style.visibility = 'hidden';
			document.getElementById('nieuwwoord').style.visibility = 'visible';
			debugger;
			document.getElementById("rijen").reset();
			for (var rijteller = 0; rijteller <= 4; rijteller++) {
				for (var kolomteller = 0; kolomteller <=4; kolomteller++) {
					document.getElementById(rijteller.toString()+"_"+kolomteller.toString()).style.backgroundColor = "white";
				}
			}
			nieuwwoord.setAttribute("onClick", "javascript:startspel();");
	}
	else {


		for (var teller = 0; teller <= 4; teller++) {
			

			if (gekozenwoord.charAt(teller) == document.getElementById(rij.toString()+"_"+teller.toString()).value) {
				document.getElementById(rij.toString()+"_"+teller.toString()).style.backgroundColor = "red";
				if (rij < 4) {
					document.getElementById(((rij +1).toString())+"_"+teller.toString()).value = document.getElementById(rij.toString()+"_"+teller.toString()).value;
				}
			}
			else {
				if (gekozenwoord.includes(document.getElementById(rij.toString()+"_"+teller.toString()).value)) {
					document.getElementById(rij.toString()+"_"+teller.toString()).style.backgroundColor = "yellow";

				}


			}

		}
		if (rij < 4) {
			rij++;
		}
		else{
			alert('game over')
			alert('het woord was: ' + gekozenwoord);
			document.getElementById('controleren').style.visibility = 'hidden';
			document.getElementById('row1').style.visibility = 'hidden';
			document.getElementById('row2').style.visibility = 'hidden';
			document.getElementById('row3').style.visibility = 'hidden';
			document.getElementById('row4').style.visibility = 'hidden';
			document.getElementById('row5').style.visibility = 'hidden';
			document.getElementById('opnieuw').style.visibility = 'visible';
			debugger;
			document.getElementById("rijen").reset();
			for (var rijteller = 0; rijteller <= 4; rijteller++) {
				for (var kolomteller = 0; kolomteller <=4; kolomteller++) {
					document.getElementById(rijteller.toString()+"_"+kolomteller.toString()).style.backgroundColor = "white";
				}
			}
			opnieuw.setAttribute("onClick", "javascript:startspel();");
			


		}
	}
}


function iswoordgoed(){
	var lettercontrol = 0;
	debugger;
	for (var teller = 0; teller <= 4; teller++) {

		if (gekozenwoord.charAt(teller) == document.getElementById(rij.toString()+"_"+teller.toString()).value) {
			lettercontrol++;	
		}
	}


	if (lettercontrol == 5) {
		return  true;
	}
	else {
		return false;
	}
}
/*function resestinput(){
	document.getElementById("row5").reset();
	document.getElementById("row4").reset();
	document.getElementById("row3").reset();
	document.getElementById("row2").reset();
	document.getElementById("row1").reset();
}*/
