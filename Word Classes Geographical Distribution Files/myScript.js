/*
Author: Jiatao Fan
*/

/*
Assume all words are in an array called "words"
*/
words = ["Family", "Love", "School", "Boring"];

/*
Data of all states in US
*/
states = [

			{data_state: "al", id: "al", value: "A"},
			{data_state: "ak", id: "ak", value: "B"},
			{data_state: "ar", id: "ar", value: "C"},
			{data_state: "az", id: "az", value: "D"},
			{data_state: "ca", id: "ca", value: "E"},
			{data_state: "co", id: "co", value: "F"},
			{data_state: "ct", id: "ct", value: "G"},
			{data_state: "de", id: "de", value: "H"},
			{data_state: "dc", id: "dc", value: "I"},
			{data_state: "fl", id: "fl", value: "J"},
			{data_state: "ga", id: "ga", value: "K"},
			{data_state: "hi", id: "hi", value: "L"},
			{data_state: "id", id: "id", value: "M"},
			{data_state: "il", id: "il", value: "N"},
			{data_state: "in", id: "in", value: "O"},
			{data_state: "ia", id: "ia", value: "P"},
			{data_state: "ks", id: "ks", value: "Q"},
			{data_state: "ky", id: "ky", value: "R"},
			{data_state: "la", id: "la", value: "S"},
			{data_state: "me", id: "me", value: "T"},
			{data_state: "md", id: "md", value: "U"},
			{data_state: "ma", id: "ma", value: "V"},
			{data_state: "mi", id: "mi", value: "W"},
			{data_state: "mn", id: "mn", value: "X"},
			{data_state: "ms", id: "ms", value: "Y"},
			{data_state: "mo", id: "mo", value: "Z"},
			{data_state: "mt", id: "mt", value: "a"},
			{data_state: "ne", id: "ne", value: "b"},
			{data_state: "nv", id: "nv", value: "c"},
			{data_state: "nh", id: "nh", value: "d"},
			{data_state: "nj", id: "nj", value: "e"},
			{data_state: "nm", id: "nm", value: "f"},
			{data_state: "ny", id: "ny", value: "g"},
			{data_state: "nc", id: "nc", value: "h"},
			{data_state: "nd", id: "nd", value: "i"},
			{data_state: "oh", id: "oh", value: "j"},
			{data_state: "ok", id: "ok", value: "k"},
			{data_state: "or", id: "or", value: "l"},
			{data_state: "pa", id: "pa", value: "m"},
			{data_state: "ri", id: "ri", value: "n"},
			{data_state: "sc", id: "sc", value: "o"},
			{data_state: "sd", id: "sd", value: "p"},
			{data_state: "tn", id: "tn", value: "q"},
			{data_state: "tx", id: "tx", value: "r"},
			{data_state: "ut", id: "ut", value: "s"},
			{data_state: "va", id: "va", value: "t"},
			{data_state: "vt", id: "vt", value: "u"},
			{data_state: "wa", id: "wa", value: "v"},
			{data_state: "wv", id: "wv", value: "w"},
			{data_state: "wi", id: "wi", value: "x"},
			{data_state: "wy", id: "wy", value: "y"}

		];


inDefaulMaptView = true;
inCorrelationAndComparisonView = false;
inMostCorrelatedWordClassesView = false;
inLeastCorrelatedWordClassesView = false;
inComparisonView = false;


/*
Display the frequency map for a selected word
*/
function selectPrimaryWord(select) {

	document.getElementById("primaryWord").innerHTML = select.options[select.selectedIndex].value;

	document.getElementById("defaultMapView").style.display = "none";

	document.getElementById("correlationAndComparisonView").style.display = "initial";

	document.getElementById("primaryWord").style.display = "initial";

	document.getElementById("frequencyMap").style.display = "initial";

	document.getElementById("mostCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("leastCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("comparisonView").style.display = "none";

}

/*
Display the most correlated word classes maps
*/
function displayMostCorrelatedWordClassesMaps() {

	document.getElementById("primaryWord").style.display = "initial";

	document.getElementById("frequencyMap").style.display = "initial";

	document.getElementById("mostCorrelatedWordClassesMaps").style.display = "initial";

	document.getElementById("leastCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("comparisonView").style.display = "none";

}

/*
Display the least correlated word classes maps
*/
function displayLeastCorrelatedWordClassesMaps() {

	document.getElementById("primaryWord").style.display = "initial";

	document.getElementById("frequencyMap").style.display = "initial";

	document.getElementById("mostCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("leastCorrelatedWordClassesMaps").style.display = "initial";

	document.getElementById("comparisonView").style.display = "none";

}

/*
Display the word to compare
*/
function selectWordToCompare() {

	var select1 = document.getElementById("wordSelector");
	var select2 = document.getElementById("popupWordSelector");

	document.getElementById("comparisonWord1").innerHTML = select1.options[select1.selectedIndex].value;
	document.getElementById("comparisonWord2").innerHTML = select2.options[select2.selectedIndex].value;

	document.getElementById("primaryWord").style.display = "none";

	document.getElementById("frequencyMap").style.display = "none";

	document.getElementById("mostCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("leastCorrelatedWordClassesMaps").style.display = "none";

	document.getElementById("comparisonView").style.display = "initial";

}