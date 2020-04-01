

let superior = document.getElementById("superior");
let middle = document.getElementById("middle");
let inferior = document.getElementById("inferior");


let a = randomSymbol();

h1Superior =  document.createElement("h1");
superior.appendChild(h1Superior);

h1Middle =  document.createElement("h1");
middle.appendChild(h1Middle);

h1Inferior =  document.createElement("h1");
inferior.appendChild(h1Inferior);






function randomNumber() {

    switch (Math.floor(Math.random() * 13)) {

        case 0: return "A";
        case 1: return "2";
        case 2: return "3";
        case 3: return "4";
        case 4: return "5";
        case 5: return "6";
        case 6: return "7";
        case 7: return "8";
        case 8: return "9";
        case 9: return "10";
        case 10: return "J";
        case 11: return "Q";
        case 12: return "K";

    }
}


function randomSymbol(){

    switch(Math.floor(Math.random()*4)){

        case 0: return "♠";
        case 1: return "♣";
        case 2: return "♥";
        case 3: return "♦";
    }

}