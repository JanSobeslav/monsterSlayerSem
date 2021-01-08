class Oracle {
    constructor() {

    }
    vypsatVyhodu(benefit){
        let kostka = Math.floor(Math.random() * 11);
        if (kostka === 0 || 5) {
            return "Smůla se ti lepí na paty!";
        } else {
            return "Proti tvému příštímu nepříteli použij "+benefit+"!";
        }
    }
}