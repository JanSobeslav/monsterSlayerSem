class LocalStorage {
    constructor() {
        if(typeof(Storage) == "undefined") {
            alert("Local storage není podporován! Hra nepůjde uložit!");
        } else {
            this._hrac = localStorage.getItem('hrac');
            this._prisera = localStorage.getItem('prisera');
            this._info = localStorage.getItem('info');
            this._inventar = localStorage.getItem('inventar');
        }
    }

    set hrac(hodnota) {
        this._hrac = hodnota;
        localStorage.setItem('hrac', JSON.stringify(hodnota));
    }
    get hrac() {
        return localStorage.getItem('hrac');
    }
    set prisera(hodnota) {
        localStorage.setItem('prisera', JSON.stringify(hodnota));
    }
    get prisera() {
        return localStorage.getItem('prisera');
    }
    set info(hodnota) {
        localStorage.setItem('info', hodnota);
    }
    get info() {
        return localStorage.getItem('info');
    }
    set inventar(hodnota) {
        localStorage.setItem('inventar', JSON.stringify(hodnota));
    }
    get inventar() {
        return localStorage.getItem('inventar');
    }
}