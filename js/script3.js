// crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, 
// stampa dentro una UL dove ogni LI ha come contenuto principale in ordine, le parole del primo array e
// come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata

let mioUl = document.getElementById("myUl");

let arrayOne = ["Zoro", "Sabo", "Ace", "Sanji", "Shanks"];
console.log(arrayOne);

let arraySecond = ["Goku", "Vegeta"];
console.log(arraySecond);

for (let i = 0; i < arrayOne.length; i++){ 
    mioUl.innerHTML += `<li>${arrayOne[i]}</li>`;


    for(y = 0; y < arraySecond.length; y++) {

        mioUl.innerHTML += `<ul><li>${arraySecond[y]}</li></ul>`;
    }
}