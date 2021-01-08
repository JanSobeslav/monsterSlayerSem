class Player {
    constructor(name, race, health, mana, minDam, maxDam, gold) {
        this.name = name;
        this.race = race;
        this.health = health;
        this.mana = mana;
        this.minDam = minDam;
        this.maxDam = maxDam;
        this.gold = gold;
        this.inventory = [];
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
        } else {
            this.health -= hodnota;
        }
    }
    upravitManu(hodnota, akce) {
        if (akce == true) {
            this.mana += hodnota;
        } else {
            this.mana -= hodnota;
        }
    }
    upravitZlato(hodnota, akce) {
        if (akce == true) {
            this.gold += hodnota;
        } else {
            this.gold -= hodnota;
        }
    }
    upravitPoskozeni(min, max) {
        this.minDam = min;
        this.maxDam = max;
    }
    utok() {
        return Math.floor(Math.random() * (this.maxDam - this.minDam + 1) ) + this.minDam;
    }
    prodat(predmet) {
        let index = -1;
        let filteredObj = this.inventory.find(function(item, i){
            if(item.name === predmet){
                index = i;
                return i;
            }
        });
        this.inventory.slice(index, 1);
        console.log('Položka '+filteredObj.name+' byla odstraněna!');
    }
    koupit(predmet) {
        this.inventory.push(predmet);
    }
}