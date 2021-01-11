class Monster {
    constructor() {
        this.health = 50;
        this.minDam = 8;
        this.maxDam = 13;
        this.weak = 'sword';
        this.level = 1;
    }
    upravitZivoty(hodnota, akce) {
        if (akce == true) {
            this.health += hodnota;
        } else {
            this.health -= hodnota;
            this.health.toFixed(0);
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
        this.health = 50*((this.level+1)/2);
        this.minDam += 2*this.level;
        this.maxDam += 2.5*this.level;
        this.health.toFixed(0);
        this.minDam.toFixed(0);
        this.maxDam.toFixed(0);

    }
}