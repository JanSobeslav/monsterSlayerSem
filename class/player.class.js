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
        this.equippedItem = null;
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
            if (this.health > this.maxHealth) {
                this.health = this.maxHealth;
            }
        } else {
            hodnota = Number(hodnota).toFixed(0);
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
            console.log("typ this.gold: "+typeof this.gold+"; typ hodnota: "+typeof hodnota);
            hodnota = Number(hodnota).toFixed(0);
            console.log("class zlato upravene: "+hodnota);
            this.gold = Number(this.gold) + Number(hodnota);  
            console.log("zlato celkem: "+typeof this.gold);
        } else {
            hodnota = Number(hodnota).toFixed(0);
            this.gold -= hodnota;
        }
    }
    upravitPoskozeni(min, max) {
        min = Number(min).toFixed(0);
        max = Number(max).toFixed(0);
        this.minDam = min;
        this.maxDam = max;
    }
    utok() {
        console.log("---- min/max "+this.minDam+"-"+this.maxDam);
        let min = Number(this.minDam);
        let max = Number(this.maxDam);
        let gPoskozeni = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("g dmg: "+gPoskozeni);
        return gPoskozeni;
    }
    odstranitPredmet(nazev) {
        return this.inventory.filter(function (emp) {
            if (emp.name === nazev) {
                return false;
            }
            return true;
        });
    }
    koupit(predmet) {
        let vysledek = true;
        $.each(this.inventory, function (index, value) {
            if (value.name === predmet.name) {
                vysledek = false;
            }
        });
        if (vysledek === true) {
            this.inventory.push(predmet);
        }

    }
    najitPredmet(val) {
        let predmet = [0, 0, 0];
        let pocet = 0;
        if (this.inventory.length !== 0) {
            $.each(this.inventory, function (index, value) {
                if (value.name === val) {
                    pocet++;
                    predmet = [value, pocet, index];
                }
                else {
                    console.log("nenalezeno");
                }

            });
            if (predmet[0] === undefined) {
                return false;
            } else {
                return predmet;
            }
        } else {
            console.log("Inventář je prázdný");
            return predmet;
        }


    }
    vypsatInventar(id, typ) {
        let opn;
        if (typ === "select") {
            $.each(this.inventory, function (index, value) {
                opn = "<option value='" + value.name + "'>" + value.name + " Cena: " + value.itemValue + "</option>";
                $(id).append(opn);

            });
        }
        if (typ === "selectVybavit") {
            $.each(this.inventory, function (index, value) {
                switch (value.type) {
                    case 'sword':
                        opn = "<option value='" + value.name + "'>" + value.name + " (" + value.minDam + "-" + value.maxDam + ")</option>";
                        $(id).append(opn);
                        break;
                        
                    case 'axe':
                        opn = "<option value='" + value.name + "'>" + value.name + " (" + value.minDam + "-" + value.maxDam + ")</option>";
                        $(id).append(opn);
                        break;
                    
                    case 'flail':
                        opn = "<option value='" + value.name + "'>" + value.name + " (" + value.minDam + "-" + value.maxDam + ")</option>";
                        $(id).append(opn);
                        break;

                    case 'bow':
                        opn = "<option value='" + value.name + "'>" + value.name + " (" + value.minDam + "-" + value.maxDam + ")</option>";
                        $(id).append(opn);
                        break;
                }
                

            });
        }
        if (typ === "selectKouzla"){
            $.each(this.inventory, function (index, value) {
                if (value.type === 'fspell' || value.type === 'wspell'){
                    opn = "<option value='" + value.name + "'>" + value.name + " (" + value.minDam + "-" + value.maxDam + ")</option>";
                    $(id).append(opn);
                }
            });
        }
        if (typ === "list") {
            $.each(this.inventory, function (index, value) {
                switch (value.type) {
                    case 'potion':
                        opn = "<li>" + value.name + " Efekt: " + value.effect + " Cena: " + value.itemValue + "</li>";
                        $(id).append(opn);
                        break;

                    case 'fspell':
                        opn = "<li>" + value.name + " Poškození: " + value.minDam + "-" + value.maxDam + " Cena many: " + value.manaCost + " Cena: " + value.itemValue + "</li>";
                        $(id).append(opn);
                        break;

                    case 'wspell':
                        opn = "<li>" + value.name + " Poškození: " + value.minDam + "-" + value.maxDam + " Cena many: " + value.manaCost + " Cena: " + value.itemValue + "</li>";
                        $(id).append(opn);
                        break;

                    default:
                        opn = "<li>" + value.name + " Poškození: " + value.minDam + "-" + value.maxDam + " Cena: " + value.itemValue + "</li>";
                        $(id).append(opn);
                        break;
                }


            });
        }

    }
}