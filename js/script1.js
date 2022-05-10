let arrayNum = [];
console.log(arrayNum);

let numRossi = document.getElementById("primoDiv");
let numVerdi = document.getElementById("secondoDiv");

numRossi.style.background = "red";
numVerdi.style.background = "green";

numRossi.innerHTML = "I numeri pari sono: "
numVerdi.innerHTML = "I numeri dispari sono: "

for (i = 0; i < 20; i++){
    let numPc = Math.floor(Math.random() * 1000) + 1;

    arrayNum.push(numPc);

    if (numPc % 2 === 0){
        numRossi.innerHTML += numPc + " ";
    } else {
        numVerdi.innerHTML += numPc + " ";
    }
}

console.log(arrayNum);