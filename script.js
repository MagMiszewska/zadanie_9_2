var maleNames = ['Arek', 'Rafał', 'Tomasz', 'Piotr'],
	femaleNames = ['Magda', 'Zosia', 'Kasia', 'Asia'];
var allNames = maleNames.concat(femaleNames);
console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log(allNames);
} else {
	console.log('Imię już jest w tablicy');
}