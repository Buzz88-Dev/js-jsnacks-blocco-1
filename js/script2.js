// crea un array che parte vuoto ma viene riempito automaticamente di 10 numeri casuali da 1 a 1000 generati dal pc
// possono esserci anche doppioni

let arrayNumb = [];
console.log(arrayNumb);

let output = document.getElementById("myDiv");

for (let i = 0; i < 10; i++){
    let numPc = Math.floor(Math.random() * 1000) + 1;
    console.log(numPc);

    arrayNumb.push(numPc);
}
output.innerHTML = "I 10 numeri dell'array sono: " + arrayNumb;

console.log(arrayNumb);