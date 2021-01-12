class Monster {
    constructor() {
        this.health = 60;
        this.minDam = 8;
        this.maxDam = 13;
        this.weak = 'sword';
        this.level = 1;
        this.maxHealth = this.health;
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
        } else {
            hodnota = Number(hodnota).toFixed(0);
            this.health -= hodnota;
        }
    }
    utok() {
        return Math.floor(Math.random() * (this.maxDam - this.minDam + 1) ) + this.minDam;
    }
    obnoveni() {
        let cislo = Math.floor(Math.random() * 6);
        switch(cislo) {
            case 0:
                this.weak = 'sword';
                break;
            case 1:
                this.weak = 'axe';
                break;
            case 2:
                this.weak = 'flail';
                break;
            case 3:
                this.weak = 'bow';
                break;
            case 4:
                this.weak = 'fspell';
                break;
            case 5:
                this.weak = 'wspell';
                break;
            }
        this.level++;
        this.maxHealth = this.maxHealth+(this.level*8);
        Number(this.maxHealth).toFixed(0);
        let minD = 2*this.level;
        Number(minD).toFixed(0);
        let maxD = 2.5*this.level;
        Number(maxD).toFixed(0);
        this.health = this.maxHealth;
        this.minDam += minD;
        this.maxDam += maxD;
    }
}