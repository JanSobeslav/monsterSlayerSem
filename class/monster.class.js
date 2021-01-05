class Monster {
    constructor(health, minDam, maxDam, weak, level) {
        this.health = health;
        this.minDam = minDam;
        this.maxDam = maxDam;
        this.weak = weak;
        this.level = level;
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
        this.health = 100*(this.level/2);
        this.minDam += 2*this.level;
        this.maxDam += 2*this.level;
    }
}