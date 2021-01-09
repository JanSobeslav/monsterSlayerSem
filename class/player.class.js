class Player {
    constructor(name, race, health, mana, minDam, maxDam, gold) {
        this.name = name;
        this.race = race;
        this.health = health;
        this.maxHealth = health;
        this.mana = mana;
        this.minDam = minDam;
        this.maxDam = maxDam;
        this.gold = gold;
        this.inventory = [];
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
            if (this.health > this.maxHealth) {
                this.health = this.maxHealth;
            }
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
        $.each(this.inventory, function(index, value){
            if (value.name === predmet.name){
                this.inventory.slice(index, 1);
            }  
        });
    }
    koupit(predmet) {
        let vysledek = true;
        $.each(this.inventory, function(index, value){
            if (value.name === predmet.name){
                vysledek = false;
            }  
        });
        if(vysledek === true) {
            this.inventory.push(predmet);
        }
        
    }
    vypsatInventar(id){
        $.each(this.inventory, function(index, value){
            let opn = "<option value='"+value.name+"'>"+value.name+" Cena: "+value.itemValue+"</option>";
            $(id).append(opn);  
            
        });
    }
}