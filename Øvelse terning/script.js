//Variable:
const part1 = "<p>Dette er part et</p>";
const part2 = "<p>Dette er part to</p>";
const part3 = "<p>Dette er part tre</p>";
const eventyr = document.getElementById("historien");
const afsnit = [part1, part2, part3];


//Tæller der holder styr på hvad der nu vises 
let vistNu = 0;
//Første del indsættes: 
eventyr.innerHTML = afsnit[vistNu];

//Næsteknappen med tilhørende funktion:
document.querySelector("button").addEventListener("click", videre);

function videre(){
    vistNu++;
    eventyr.innerHTML = afsnit[vistNu];
}