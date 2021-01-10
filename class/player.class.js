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
        this.equippedItem;
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
        console.log(Math.floor(Math.random() * (this.maxDam - this.minDam + 1) ) + this.minDam);
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
    najitPredmet(val) {
        let predmet = [];
        let pocet = 0;
        $.each(this.inventory, function(index, value){
            if (value.name === val){
                console.log("předmět nalezen!");
                pocet++;
                predmet = [value, pocet];
            }
            
        });
        if (predmet[0] === undefined) {
            return false;
        } else {
            console.log("počet predmetu: "+predmet[1]);
            return predmet;  
        } 
        
    }
    vypsatInventar(id, typ){
        let opn;
        if (typ === "select"){
            $.each(this.inventory, function(index, value){
                opn = "<option value='"+value.name+"'>"+value.name+" Cena: "+value.itemValue+"</option>";
                $(id).append(opn);  
                
            });
        }
        if (typ === "list") {
            $.each(this.inventory, function(index, value){
                switch (value.type) {
                    case 'potion':
                        opn = "<li>"+value.name+" Efekt: "+value.effect+" Cena: "+value.itemValue+"</li>";
                        $(id).append(opn); 
                        break;

                    case 'fspell':
                        opn = "<li>"+value.name+" Poškození: "+value.minDam+"-"+value.maxDam+" Cena many: "+value.manaCost+" Cena: "+value.itemValue+"</li>";
                        $(id).append(opn); 
                        break;
                    
                    case 'wspell':
                        opn = "<li>"+value.name+" Poškození: "+value.minDam+"-"+value.maxDam+" Cena many: "+value.manaCost+" Cena: "+value.itemValue+"</li>";
                        $(id).append(opn); 
                        break;

                    default:
                        opn = "<li>"+value.name+" Poškození: "+value.minDam+"-"+value.maxDam+" Cena: "+value.itemValue+"</li>";
                        $(id).append(opn); 
                        break;
                }
                 
                
            });
        } 
        
    }
}