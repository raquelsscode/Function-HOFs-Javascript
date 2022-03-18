const data = require('../data/zoo_data');

function emptyAnimals() {
  const newAnimalList = data.species.map((thisAnimal) => ({
    name: thisAnimal.name,
    residents: thisAnimal.residents,
  }));
  return newAnimalList.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}
emptyAnimals();

function numberForAnimals(animal) {
  const animals = data.species.find((item) => item.name === animal.specie).residents;
  const count = animals.length;
  return count;
}
numberForAnimals({ specie: 'giraffes' });

function numberSexAndSpecies(animal) {
  const animalspecie = data.species.find((item) => item.name === animal.specie).residents;
  const animalsex = animalspecie.filter((item1) => item1.sex === animal.sex).length;
  return animalsex;
}
(numberSexAndSpecies({ specie: 'elephants', sex: 'male' }));

function countAnimals(animal) {
  if (!animal) {
    return emptyAnimals();
  } if (Object.keys(animal).length === 2) {
    return numberSexAndSpecies(animal);
  }
  return numberForAnimals(animal);
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
