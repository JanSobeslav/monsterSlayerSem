class Oracle {
    constructor() {

    }
    vypsatVyhodu(benefit){
        let kostka = Math.floor(Math.random() * 11);
        if (kostka >= 0 && kostka <= 5) {
            return "Smůla se ti lepí na paty! Zaplať 50 zlatých a zkus to znovu!";
        } else {
            switch (benefit) {
                case 'sword':
                    benefit = "meč";
                    break;
  
                case 'axe':
                    benefit = "sekeru";
                    break;

                case 'flail':
                    benefit = "kyj";
                    break;

                case 'bow':
                    benefit = "luk";
                    break;

                case 'fspell':
                    benefit = "ohnivé kouzlo";
                    break;

                case 'wspell':
                    benefit = "ledové nebo vodní kouzlo";
                    break;
            }
            return "Proti tvému příštímu nepříteli použij "+benefit+"!";
        }
    }
}