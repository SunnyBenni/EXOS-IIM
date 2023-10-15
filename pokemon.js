"use strict";

class Pokemon {
    constructor(name , attack , defense , hp , luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    
    attackpokemon(pokemon){
        if(this.isluck()){
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + 'A FRAPPER TRES FORT' + pokemon.name + 'ET LUI A MIS' + pokemon.damage + 'DANS SA FACE' + 'IL LUI RESTE' + pokemon.hp + 'DE VIE');
        }else {
            console.log(this.name + " T'AS RATER T NUL")
        }
        }
    
    isluck(){
    
       return this.luck > Math.random()
        

    }
}

   let moufouette = new Pokemon('Moufouette', 25 , 10, 80 , 0.9 );
   let dracaufeu = new Pokemon('Dracaufeu', 30 , 8, 100 , 0.6 );

while(moufouette.hp >0 && dracaufeu.hp>0){
    moufouette.attackpokemon(dracaufeu)
    if(dracaufeu.hp<=0){
        console.log(dracaufeu.name+" A FINI AU RESTO");
        break;
    }
    dracaufeu.attackpokemon(moufouette)
    if(moufouette.hp<=0){
        console.log(moufouette.name+" A FINI AU RESTO");
        break;
    }


}