const data = require("../data/zoo_data");

function getAnimalsOlderThan(animal, age) {
  const animals = data.species
    .filter((elementfilter) => elementfilter.name === animal)
    .map((elementmap) => elementmap.residents)
    .find((elementfind) => elementfind)
    .every((elementevery) => elementevery.age > age);
  return animals;
}

console.log(getAnimalsOlderThan("penguins", 10));

module.exports = getAnimalsOlderThan;
