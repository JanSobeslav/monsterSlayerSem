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
        this.health = 100*((this.level+1)/2);
        this.minDam += 2*this.level;
        this.maxDam += 2.5*this.level;

    }
}