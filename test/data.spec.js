import { lolfilter, lolBuscar, lolOrdenar} from '../src/data.js';

const buscNomCampInpu = [
  {"name": "Aatrox"},
  {"name": "Maokai"},
  {"name": "Shen"}
]

/*const buscarAatrox = [
  {"name": "Aatrox"}
]*/
/*
const buscarMaokai = [
  {"name": "Maokai"}
]

const buscarShen = [
  {"name": "Shen"}
]*/

//Filtrar
const filtrarTypeInp = [
  {"id": "Aatrox", "tags": ["Fighter", "Tank"]},
  {"id": "Janna", "tags": ["Support", "Mage"]},
  {"id": "Elise", "tags": ["Mage", "Fighter"]},
  {"id": "Heimerdinger", "tags": ["Mage", "Support"]},
  {"id": "LeeSin",  "tags": ["Fighter", "Assassin"]}
]

const filFighter = [
  {"id": "Aatrox", "tags": ["Fighter", "Tank"]},
  {"id": "Elise", "tags": ["Mage", "Fighter"]},
  {"id": "LeeSin",  "tags": ["Fighter", "Assassin"]}
]

const filMage = [
  {"id": "Janna", "tags": ["Support", "Mage"]},
  {"id": "Elise", "tags": ["Mage", "Fighter"]},
  {"id": "Heimerdinger", "tags": ["Mage", "Support"]}
]

const filSupport = [
  {"id": "Janna", "tags": ["Support", "Mage"]},
  {"id": "Heimerdinger", "tags": ["Mage", "Support"]}
]


//ordenar
const ordenInp = [
  {"key": "27","name": "Singed"},
  {"key": "154", "name": "Zac"},
  {"key": "103","name": "Ahri"}
]

const ordenOutAZ = [
  {"key": "103","name": "Ahri"},
  {"key": "27","name": "Singed"},
  {"key": "154", "name": "Zac"}
]

const ordenOutZA = [
  {"key": "154", "name": "Zac"},
  {"key": "27","name": "Singed"},
  {"key": "103","name": "Ahri"}
]

//toBe compra de manera general 
//toEqual compara algo en especifico 

describe('lolBuscar', () => {
  it('is a function', () => {
    expect(typeof lolBuscar).toBe('function');
  });

  it('Deberia de buscarme al campeon por tipo Fighter', () => {
    console.log(lolBuscar(buscNomCampInpu, "Aatrox"))
    expect(lolBuscar(buscNomCampInpu, "Aatrox")).toEqual([]);  
  });
/*
  it('Deberia de buscarme al campeon por tipo Mage', () => {
    console.log(lolBuscar(buscNomCampInpu, "Aatrox"))
    expect(lolBuscar(buscNomCampInpu, "Maokai")).toEqual(buscarMaokai);
  });

  it('Deberia de buscarme al campeon por tipo Support', () => {
    console.log(lolBuscar)
    expect(lolBuscar(buscNomCampInpu, "Shen")).toEqual(buscarShen);
  });*/
});


describe('lolfilter', () => {
  it('is a function', () => {
    expect(typeof lolfilter).toBe('function');
  });

  it('Deberia de ordenarme los campeones por tipo Fighter', () => {
    expect(lolfilter(filtrarTypeInp, "Fighter")).toEqual(filFighter);
  });

  it('Deberia de ordenarme los campeones por tipo Mage', () => {
    expect(lolfilter(filtrarTypeInp, "Mage")).toEqual(filMage);
  });

  it('Deberia de ordenarme los campeones por tipo Support', () => {
    expect(lolfilter(filtrarTypeInp, "Support")).toEqual(filSupport);
  });
});



describe('lolOrdenar', () => {
  it('is a function', () => {
    expect(typeof lolOrdenar).toBe('function');
    //expect(typeof example).toBe('function');
  });

  it('Debe de retornar los campeones ordenados de A-Z', () => {
    expect(lolOrdenar(ordenInp,'A-Z')).toEqual(ordenOutAZ);
  });

  it('Debe de retornar los campeones ordenados de Z-A', () => {
    expect(lolOrdenar(ordenInp,'Z-A')).toEqual(ordenOutZA);
  });
});

