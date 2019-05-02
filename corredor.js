class Corredor {
    constructor (nombre){
        this._nombre = nombre;
        this._posicion = 0;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Nombre() {
        return this._nombre;
    }

    get Posicion(){
        return this._posicion;
    }

    mover = (posicion, pasos) => {
        this._posicion += posicion;

        if (posicion < 3) {
            pista[this.posicion] = this.posicion + 1;
        }
        else if (posicion < 5) {
            pista[this.posicion] = this.posicion -1; 
        }
        else if (posicion < 9) {
            pista[this.posicion] = this.posicion +2;
        }
        else {
            pista[this.posicion] = this.posicion +3;
        }

        console.log(this._nombre, 'avanza a la casilla');
        console.log(pasos[this._posicion]);
    }
}
