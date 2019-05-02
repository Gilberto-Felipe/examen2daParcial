class Pista 
{
    constructor {
        this._pista = [];
    }

    get Pista() {
        return this._pista;
    }

    get Pista() {
        for (let index = 1; index <= 100; index++){
            this._pista.push(index);
        }
        return this._pista;
    }
}