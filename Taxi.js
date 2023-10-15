"use strict";

let santeMentale = 7;  
let nbFeuxRouge = 30;
let nbChangement = 0;
let musique = "ANISSA  Wejdene";

function changerMusique(){
    nbFeuxRouge--;

    const musiqueChoisie = Math.floor(Math.random() * 5) + 1;

    if (musiqueChoisie === 1){
        musique = "ANISSA  Wejdene";
        santeMentale--;
        nbChangement++;
    } else if (musiqueChoisie === 2){
        musique = "OPEN WINDOWS  Starrysky";
    } else if (musiqueChoisie === 3){
        musique = "BOY WILL BE BUGS  Cavetown";
     } else if (musiqueChoisie === 4){
        musique ="MARS  Yungblud";
     } else if (musiqueChoisie === 5){
        musique = "SHOOT ME  Day 6";
     }

}

while(santeMentale > 0 && nbFeuxRouge > 0){
    changerMusique();
    console.log("ACTUELEMMENT A LA RADIO ! " + musique + ". IL VOUS RESTES " + nbFeuxRouge + " FEUX ROUGES !");
}
if(santeMentale <= 0){
    console.log("JOHN A FAIT KABOOM ! WEJDENE EST TELLMENT UNE BOMBE QUE JOHN A EXPLOSER DE DESEPOIR");
} else {
    console.log("JOHN EST RENTRE CHEZ LUI, A RETROUVER SON CHAT ET SA SWITCH IL VA SE REMTTRE DES SES AVENTURES SUR MARIO KART... CHANGER " + nbChangement + " FOIS DE TAXI L'AS CREVRE");
}