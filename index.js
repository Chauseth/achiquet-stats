/* Déclaration des variables */

var numbers = [];
var input = 1;
var counter = 0;
var minimum = 0;
var maximum = 0;
var somme = 0;
var moyenne = 0;

/* Traitement des entrées */

while (input != 0) {
  input = prompt("Veuillez entrer une valeur (0 pour arreter) : ");
  if (input == 0 || input == null) {
    break;
  } else {
    numbers.push(parseInt(input));
    counter += 1;
  }
}

/* Opération sur la liste numbers */

/* Calcul minimum et maximum */

for (let index = 0; index < counter; index++) {
  if (numbers[index] <= minimum || minimum == 0) {
    minimum = numbers[index];
  } else {
    if (numbers[index] >= maximum || maximum == 0) {
      maximum = numbers[index];
    }
  }
}

/* Calcul somme */

for (let index = 0; index < counter; index++) {
  somme = somme + numbers[index];
}

/* Calcul moyenne */

moyenne = somme / counter;

/* Affichage des résultats */

alert(
  "Nombre d'entrées saisies : " +
    counter +
    "\nEntrées comprises entre " +
    minimum +
    " et " +
    maximum +
    "\nLa somme des entrées est de : " +
    somme +
    "\nLa moyenne des entrées est de : " +
    moyenne
);
