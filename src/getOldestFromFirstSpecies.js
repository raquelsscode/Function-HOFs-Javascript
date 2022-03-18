const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeAnimal = data.employees.find((animals) => animals.id === id);
  const { responsibleFor } = employeeAnimal;
  const idAnimal = data.species.find((animal2) => animal2.id === responsibleFor[0]);
  const { residents } = idAnimal;
  const age = residents.map((item3) => item3.age);
  const ageMax = Math.max(...age);
  const oldAnimal = residents.find((older) => older.age === ageMax);
  const arr = Object.values(oldAnimal);
  return arr;
}

module.exports = getOldestFromFirstSpecies;
