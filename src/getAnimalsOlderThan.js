const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
    const animals = data.species
        .filter((elements) => elements.name === animal)
        .map((eleme) => eleme.residents)
        .find((banana) => banana)
        .every((bolo) => bolo.age > age);
    return animals;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;