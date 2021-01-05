class Player {
    constructor(id, name, race, health, mana, minDam, maxDam, gold) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.health = health;
        this.mana = mana;
        this.minDam = minDam;
        this.maxDam = maxDam;
        this.gold = gold;
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
    prodat() {
        //vymaže položku z inventáře a spustí metodu upravitZlato() 
    }
}