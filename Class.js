"use strict";

class pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name= name
        this.attack= attack
        this.defense= defense
        this.hp= hp
        this.luck= luck
    }
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage=this.attack-pokemon.defense
            pokemon.hp-=damage
            console.log(this.name+" a attaqué "+pokemon.name+' pour '+damage+" de degat il lui reste "+pokemon.hp+" point de vie");
        }else {
            console.log(this.name+" a raté son attaque");
        }
    }
    isLucky(){
        return this.luck>Math.random()
    }
}
let mew= new pokemon("mew",150,50,1000,1.5);
let mewtwo= new pokemon("mewtwo",120,65,1220,1.2);

while(mew.hp >0 && mewtwo.hp>0){
    mew.attackPokemon(mewtwo)
    if(mewtwo.hp<=0){
        console.log(mewtwo.name+" est mort !");
        break
    }
    mewtwo.attackPokemon(mew)
    if(mew.hp<=0){
        console.log(mew.name+" est mort ");
        break
    }
}