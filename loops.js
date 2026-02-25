console.log("===== Lab JavaScript : Boucles for et while en JavaScript  =====");


// Tâche 1 — Compter de 1 à 5 avec for

console.log(' Tâche 1 — Compter de 1 à 5 avec for');

for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('Counting completed!');

// Tâche 2 — Compte à rebours de 5 à 1 avec for

console.log(' Tâche 2 — Compte à rebours de 5 à 1 avec for');

for (var i = 5; i > 0; i--) {
    console.log(i);
}
console.log('Countdown finished!');

// Tâche 3 — Compter de 1 à 5 avec while 

console.log(' Tâche 3 — Compter de 1 à 5 avec while ');

var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}
console.log('Counting completed!');

// Tâche 4 — Compte à rebours de 5 à 1 avec while 

console.log(' Tâche 4 — Compte à rebours de 5 à 1 avec while '); 

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;  
}
console.log('Countdown finished!');

//Tâche 5 — Afficher les années 2018 à 2022 avec while

console.log(' Tâche 5 — Afficher les années 2018 à 2022 avec while ');

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
}