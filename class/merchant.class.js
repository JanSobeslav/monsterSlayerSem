class Merchant {
    constructor() {
        this.inventory = [
            //MEČE
            {
                name: 'Rezavý meč',
                type: 'sword',
                minDam: 12,
                maxDam: 20,
                itemValue: 15
            },
            {
                name: 'Starý meč',
                type: 'sword',
                minDam: 14,
                maxDam: 21,
                itemValue: 25
            },
            {
                name: 'Železný meč',
                type: 'sword',
                minDam: 18,
                maxDam: 25,
                itemValue: 35
            },
            {
                name: 'Obouruční železný meč',
                type: 'sword',
                minDam: 25,
                maxDam: 35,
                itemValue: 50
            },
            {
                name: 'Elitní meč',
                type: 'sword',
                minDam: 40,
                maxDam: 55,
                itemValue: 68
            },
            {
                name: 'Elitní obouruční meč',
                type: 'sword',
                minDam: 60,
                maxDam: 75,
                itemValue: 95
            },
            {
                name: 'Královský meč',
                type: 'sword',
                minDam: 80,
                maxDam: 90,
                itemValue: 120
            },
            {
                name: 'Královský obouruční meč',
                type: 'sword',
                minDam: 90,
                maxDam: 110,
                itemValue: 149
            },
            {
                name: 'Meč dračího služebníka',
                type: 'sword',
                minDam: 150,
                maxDam: 165,
                itemValue: 199
            },
            {
                name: 'Meč nejapné náhody',
                type: 'sword',
                minDam: 1,
                maxDam: 200,
                itemValue: 100
            },
            {
                name: 'Meč štěstí',
                type: 'sword',
                minDam: 130,
                maxDam: 200,
                itemValue: 300
            },
            {
                name: 'Meč nemrtvého lorda',
                type: 'sword',
                minDam: 180,
                maxDam: 220,
                itemValue: 389
            },
            {
                name: 'Excalibur (meč)',
                type: 'sword',
                minDam: 300,
                maxDam: 350,
                itemValue: 690
            },
            {
                name: 'Durandal (meč)',
                type: 'sword',
                minDam: 400,
                maxDam: 480,
                itemValue: 850
            },
            {
                name: 'Dračí meč',
                type: 'sword',
                minDam: 630,
                maxDam: 720,
                itemValue: 1000
            },
            {
                name: 'Dračí meč usmrcení',
                type: 'sword',
                minDam: 800,
                maxDam: 900,
                itemValue: 1400
            },
            {
                name: 'Uriziel',
                type: 'sword',
                minDam: 1500,
                maxDam: 1900,
                itemValue: 2456
            },
            {
                name: 'Glamdring',
                type: 'sword',
                minDam: 2500,
                maxDam: 3105,
                itemValue: 3500
            },
            {
                name: 'Meč vyšší moci',
                type: 'sword',
                minDam: 5000,
                maxDam: 6400,
                itemValue: 8500
            },
            {
                name: 'Meč démona podsvětí',
                type: 'sword',
                minDam: 8000,
                maxDam: 9200,
                itemValue: 10666
            },
            {
                name: 'Svatý meč',
                type: 'sword',
                minDam: 14000,
                maxDam: 16000,
                itemValue: 25000
            },
            {
                name: 'Svatý meč spravedlnosti',
                type: 'sword',
                minDam: 30000,
                maxDam: 40000,
                itemValue: 60000
            },
            //SEKERY
            {
                name: 'Sekyrka na dřevo',
                type: 'axe',
                minDam: 15,
                maxDam: 20,
                itemValue: 17
            },
            {
                name: 'Oboustranná sekera',
                type: 'axe',
                minDam: 20,
                maxDam: 29,
                itemValue: 45
            },
            {
                name: 'Větší sekera',
                type: 'axe',
                minDam: 20,
                maxDam: 25,
                itemValue: 39
            },
            {
                name: 'Bitevní sekera',
                type: 'axe',
                minDam: 35,
                maxDam: 48,
                itemValue: 55
            },
            {
                name: 'Obouruční bitevní sekera',
                type: 'axe',
                minDam: 55,
                maxDam: 70,
                itemValue: 85
            },
            {
                name: 'Sekera vítězství',
                type: 'axe',
                minDam: 80,
                maxDam: 100,
                itemValue: 120
            },
            {
                name: 'Sekera zadostiučinění',
                type: 'axe',
                minDam: 130,
                maxDam: 160,
                itemValue: 180
            },
            {
                name: 'Sekera ničení',
                type: 'axe',
                minDam: 200,
                maxDam: 250,
                itemValue: 299
            },
            {
                name: 'Sekera zničení',
                type: 'axe',
                minDam: 280,
                maxDam: 310,
                itemValue: 320
            },
            {
                name: 'Ohnivá sekera',
                type: 'axe',
                minDam: 355,
                maxDam: 400,
                itemValue: 450
            },
            {
                name: 'Ledová sekera',
                type: 'axe',
                minDam: 380,
                maxDam: 400,
                itemValue: 455
            },
            {
                name: 'Katova sekera',
                type: 'axe',
                minDam: 420,
                maxDam: 500,
                itemValue: 535
            },
            {
                name: 'Zdobená sekera',
                type: 'axe',
                minDam: 600,
                maxDam: 700,
                itemValue: 783
            },
            {
                name: 'Skřetí sekera',
                type: 'axe',
                minDam: 720,
                maxDam: 800,
                itemValue: 802
            },
            {
                name: 'Zlobří sekera',
                type: 'axe',
                minDam: 890,
                maxDam: 1000,
                itemValue: 1150
            },
            {
                name: 'Vikingská sekera',
                type: 'axe',
                minDam: 1200,
                maxDam: 1500,
                itemValue: 1800
            },
            {
                name: 'Královská sekera',
                type: 'axe',
                minDam: 1800,
                maxDam: 2000,
                itemValue: 2500
            },
            {
                name: 'Sekera královského kata',
                type: 'axe',
                minDam: 2500,
                maxDam: 3000,
                itemValue: 3200
            },
            {
                name: 'Sekera královského kata',
                type: 'axe',
                minDam: 2500,
                maxDam: 3000,
                itemValue: 3200
            },
            {
                name: 'Sekera milosrdenství',
                type: 'axe',
                minDam: 4000,
                maxDam: 5000,
                itemValue: 6500
            },
            {
                name: 'Prokletá sekera',
                type: 'axe',
                minDam: 1,
                maxDam: 6000,
                itemValue: 4000
            },
            {
                name: 'Sekera světel',
                type: 'axe',
                minDam: 7000,
                maxDam: 8500,
                itemValue: 9999
            },
            {
                name: 'Pán seker',
                type: 'axe',
                minDam: 15000,
                maxDam: 19000,
                itemValue: 25000
            },
            {
                name: 'Dračí diamantová sekera',
                type: 'axe',
                minDam: 32000,
                maxDam: 39000,
                itemValue: 59999
            },
            //KYJE
            {
                name: 'Kyj',
                type: 'flail',
                minDam: 14,
                maxDam: 18,
                itemValue: 15
            },
            {
                name: 'Kyj s hřeby',
                type: 'flail',
                minDam: 14,
                maxDam: 21,
                itemValue: 25
            },
            {
                name: 'Pohrabáč',
                type: 'flail',
                minDam: 10,
                maxDam: 21,
                itemValue: 22
            },
            {
                name: 'Okovaný cep',
                type: 'flail',
                minDam: 15,
                maxDam: 27,
                itemValue: 40
            },
            {
                name: 'Palcát',
                type: 'flail',
                minDam: 30,
                maxDam: 45,
                itemValue: 55
            },
            {
                name: 'Ocelový palcát',
                type: 'flail',
                minDam: 70,
                maxDam: 90,
                itemValue: 110
            },
            {
                name: 'Řemdich',
                type: 'flail',
                minDam: 110,
                maxDam: 160,
                itemValue: 199
            },
            {
                name: 'Řemdich černokněžného krále',
                type: 'flail',
                minDam: 200,
                maxDam: 280,
                itemValue: 309
            },
            {
                name: 'Válečné kladivo',
                type: 'flail',
                minDam: 320,
                maxDam: 390,
                itemValue: 450
            },
            {
                name: 'Cep Jana Žižky',
                type: 'flail',
                minDam: 450,
                maxDam: 500,
                itemValue: 530
            },
            {
                name: 'Palice vlády',
                type: 'flail',
                minDam: 1,
                maxDam: 500,
                itemValue: 400
            },
            {
                name: 'Thorovo kladivo',
                type: 'flail',
                minDam: 800,
                maxDam: 1000,
                itemValue: 1300
            },
            {
                name: 'Kladivo na čarodějnice',
                type: 'flail',
                minDam: 1500,
                maxDam: 2000,
                itemValue: 2400
            },
            {
                name: 'Kladivo Květoslava Rozbíječe',
                type: 'flail',
                minDam: 3000,
                maxDam: 4000,
                itemValue: 4999
            },
            {
                name: 'Ultimátní kladivo inkvizice',
                type: 'flail',
                minDam: 15000,
                maxDam: 20000,
                itemValue: 29000
            },
            {
                name: 'Řemdich posvátného hněvu',
                type: 'flail',
                minDam: 25000,
                maxDam: 41000,
                itemValue: 61000
            },
            //LUKY
            {
                name: 'Malý luk',
                type: 'bow',
                minDam: 15,
                maxDam: 20,
                itemValue: 21
            },
            {
                name: 'Dlouhý luk',
                type: 'bow',
                minDam: 20,
                maxDam: 25,
                itemValue: 30
            },
            {
                name: 'Silný dlouhý luk',
                type: 'bow',
                minDam: 25,
                maxDam: 32,
                itemValue: 40
            },
            {
                name: 'Reflexní luk',
                type: 'bow',
                minDam: 30,
                maxDam: 40,
                itemValue: 55
            },
            {
                name: 'Dubový luk',
                type: 'bow',
                minDam: 60,
                maxDam: 100,
                itemValue: 120
            },
            {
                name: 'Luk přesnosti',
                type: 'bow',
                minDam: 120,
                maxDam: 160,
                itemValue: 190
            },
            {
                name: 'Luk ostrostřelce',
                type: 'bow',
                minDam: 190,
                maxDam: 250,
                itemValue: 295
            },
            {
                name: 'Luk Robina Hooda',
                type: 'bow',
                minDam: 300,
                maxDam: 400,
                itemValue: 500
            },
            {
                name: 'Mistrovský luk',
                type: 'bow',
                minDam: 600,
                maxDam: 800,
                itemValue: 1000
            },
            {
                name: 'Skřetí elitní luk',
                type: 'bow',
                minDam: 1000,
                maxDam: 1500,
                itemValue: 1666
            },
            {
                name: 'Rozbitý luk',
                type: 'bow',
                minDam: 1,
                maxDam: 1000,
                itemValue: 800
            },
            {
                name: 'Elfí luk',
                type: 'bow',
                minDam: 2000,
                maxDam: 2600,
                itemValue: 3100
            },
            {
                name: 'Luk vznešeného elfa',
                type: 'bow',
                minDam: 3500,
                maxDam: 4500,
                itemValue: 6500
            },
            {
                name: 'Luk z neznáméno dřeva',
                type: 'bow',
                minDam: 6000,
                maxDam: 8000,
                itemValue: 9999
            },
            {
                name: 'Luk rychlé smrti',
                type: 'bow',
                minDam: 15000,
                maxDam: 19000,
                itemValue: 23000
            },
            {
                name: 'Luk anděla',
                type: 'bow',
                minDam: 30000,
                maxDam: 40000,
                itemValue: 65000
            },
            //LEKTVARY
            {
                name: 'Malý lektvar zdraví',
                type: 'hpotion',
                effect: 10,
                itemValue: 50
            },
            {
                name: 'Střední lektvar zdraví',
                type: 'hpotion',
                effect: 50,
                itemValue: 150
            },
            {
                name: 'Velký lektvar zdraví',
                type: 'hpotion',
                effect: 200,
                itemValue: 500
            },
            {
                name: 'Lektvar života',
                type: 'hpotion',
                effect: 1000,
                itemValue: 2000
            },
            {
                name: 'Malý lektvar many',
                type: 'mpotion',
                effect: 10,
                itemValue: 30
            },
            {
                name: 'Střední lektvar many',
                type: 'mpotion',
                effect: 50,
                itemValue: 90
            },
            {
                name: 'Velký lektvar many',
                type: 'mpotion',
                effect: 200,
                itemValue: 250
            },
            {
                name: 'Lektvar magické síly',
                type: 'mpotion',
                effect: 1000,
                itemValue: 1500
            },
            //KOUZLA
            {
                name: 'Ohnivá jiskra',
                type: 'fspell',
                minDam: 10,
                maxDam: 50,
                manaCost: 50,
                itemValue: 150
            },
            {
                name: 'Ohnivá koule',
                type: 'fspell',
                minDam: 50,
                maxDam: 100,
                manaCost: 100,
                itemValue: 250
            },
            {
                name: 'Ohnivá smršť',
                type: 'fspell',
                minDam: 100,
                maxDam: 200,
                manaCost: 200,
                itemValue: 400
            },
            {
                name: 'Ohnivá bouře',
                type: 'fspell',
                minDam: 400,
                maxDam: 800,
                manaCost: 800,
                itemValue: 800
            },
            {
                name: 'Ohnivý meteorit',
                type: 'fspell',
                minDam: 1500,
                maxDam: 3000,
                manaCost: 3000,
                itemValue: 8000
            },
            {
                name: 'Potopa',
                type: 'wspell',
                minDam: 10,
                maxDam: 50,
                manaCost: 50,
                itemValue: 150
            },
            {
                name: 'Ledový šíp',
                type: 'wspell',
                minDam: 50,
                maxDam: 100,
                manaCost: 100,
                itemValue: 250
            },
            {
                name: 'Ohnivá smršť',
                type: 'wspell',
                minDam: 100,
                maxDam: 200,
                manaCost: 200,
                itemValue: 400
            },
            {
                name: 'Ledová bouře',
                type: 'wspell',
                minDam: 400,
                maxDam: 800,
                manaCost: 800,
                itemValue: 800
            },
            {
                name: 'Pohlcení mrazem',
                type: 'wspell',
                minDam: 1500,
                maxDam: 3000,
                manaCost: 3000,
                itemValue: 8000
            },
        ]
    }
}