// creo variables
let pista = new Pista();
let posibilidad = new Posibilidad();
console.log(Pista);
let corredorA = new Corredor('Alexei');
let corredorB = new Corredor('Elena');

while (corredorA.Posicion < 99 && corredorB.Posicion < 99) {
    corredorA.Posicion;
    corredorA.mover(posibilidad.lanzar(), pista.Pista);

    corredorB.Posicion;
    corredorB.mover(posibilidad.lanzar(), pista.Pista);

    if(corredorA.Posicion == 99 || corredorB.Posicion){
        console.log('CorredorA ganó');
    } else {
        console.log('CorredorB ganó');
    }
}

