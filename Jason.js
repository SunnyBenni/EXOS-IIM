"use strict";

let hpjason = 100;

let survivantsRoles=["sportif/ve", "étudiant", "gothique", "blond/e", "Hippie", "skater/euse", "fanatique", "Thanatopracteur"]; 

let survivantsNames=["Cristophe", "BLOUP", "Bill", "Antonio", "Duplo", "Aristote", "Raclette", "Samantha", "Tammair", "Clitorine", "Eau", "Tututu"];

class survivant{
    constructor(){
        this.roles = survivantsRoles[ Math.floor( Math.random() * survivantsRoles.length)];
        this.prenom = survivantsNames[ Math.floor( Math.random() * survivantsNames.length)];
        this.probaMort = Math.floor(Math.random() * 10);
        this.probaEsquive = Math.floor(Math.random() * (10 - this.probaMort));
        this.probaDegatDead =10 - this.probaMort - this.probaEsquive;
        this.proba = [];

        for(let i=0;i<this.probaMort;i++){
            this.proba.push("T MORT LOL");
        }
        for(let i=0;i<this.probaDegatDead;i++){
            this.proba.push("T MORT MAIS TU TAPES");
        }
        for(let i=0;i<this.probaEsquive;i++){
            this.proba.push("BAM ESQUIVE DU KANGOUROU");
        }

    }
}

let survivant1 = new survivant();
let survivant2 = new survivant();
let survivant3 = new survivant();
let survivant4 = new survivant();
let survivant5 = new survivant();

console.log(survivant1);
console.log(survivant2);
console.log(survivant3);
console.log(survivant4);
console.log(survivant5);

let vivants=[survivant1, survivant2, survivant3, survivant4, survivant5];
let nbmort = []

while( hpjason > 0 && vivants.legnt > 0) {
    let randsurvivant = vivants[ Math.floor ( Math.random() * vivants.length)];
    let action = randsurvivant.proba [ Math.floor( math.random() * randsurvivant.proba.lenght)];

    if (action == "T MORT LOL"){
        nbmort.push(randsurvivant.prenom)
        vivants.splice ( vivants.indexOf ( randsurvivant) , 1 )
        console.log(`JASON CHOPE ${randsurvivant.prenom}ET LE DECOUPE EN SAUCISSON`);
    }
    if(action=="BAM ESQUIVE DU KANGOUROU"){
        hpjason -= 10
        console.log(`JASON C'EST FAIT PRANK PAR ${randsurvivant.prenom} ET CE PREND 10 DE DEGAT DANS LA FACE BAM`);
        console.log(`IL RESTE ${hpjason} HP A JASI JASON )`);
    }

    if(action=="T MORT MAIS TU TAPES"){
            nbMort.push(randsurvivant.prenom);
            enVie.splice(vivants.indexOf(randsurvivant),1);
            jasonHp-=15;
            console.log(`JASON CHOPE ET ETRANGLE ${randsurvivant.prenom} MAIS IL SE PREND UN COUP DANS L'ENTRE JAMBE ET PREND DONC 15 DEGATS`);
            console.log(`IL RESTE ${hpjason} HP A JASI JASON`);
        }
    }

    if (hpjason <= 0){
        console.log("JASON A FINI EN TERRINE")
        console.log(`LES SURVIVANTS SON ENFIN LIBRE D'ALLER AU BK SANS MOURRIR ! LES STEAKS SERONT COMPOSES DE ${nbmort} SURVIVANTS` )

    }else{
        console.log(" JASON A FAIT DONT DE SES AMIS AU BK")
    }

    if(vivants != 0){
        console.log("LES GENS FORTS")
        vivants.forEach(( element) => console.log ( element.prenom));
    
    }else{
        console.log("TOUT LE MONDE FINI EN WHOOPER");
    }
