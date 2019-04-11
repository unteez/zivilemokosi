//Duotas kintamasis 'x' kurio reiksme lygu '5' ir masyvo elementai: [5,8,9,14,20]
// Parasyti cikla kuris pridetu antro elememento skaiciu prie 'x';
// Gauta atsakyma isvesti konsoleje. Atsakyma isvesti pasibaigus ciklo blokui
KAZKAS NE TAIP
var zodis = 'Siandien grazi diena';

function da(tekstas){
	var kiekKartu = 0;
	for (var i = 0; i < tekstas.length; i++) {
		
		if (tekstas[i] == 'a') {
			kiekKartu = kiekKartu + 1;
		}
	}
	console.log(kiekKartu);
}
da(zodis);
