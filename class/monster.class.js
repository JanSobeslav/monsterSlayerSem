class Monster {
    constructor() {
        this.health = 100;
        this.minDam = 10;
        this.maxDam = 20;
        this.weak = 'sword';
        this.level = 1;
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
        } else {
            this.health -= hodnota;
        }
    }
    utok() {
        return Math.floor(Math.random() * (this.maxDam - this.minDam + 1) ) + this.minDam;
    }
    obnoveni() {
        this.level++;
        this.health = 100*((this.level+1)/2);
        this.minDam += 2*this.level;
        this.maxDam += 2.5*this.level;
    }
}