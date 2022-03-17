const data = require('../data/zoo_data');

function countAnimals(animal) {
// const count = data.species.find((item) => item.name === animal.specie).residents;
// // console.log(count);
}
countAnimals();
console.log(data.species.map((item1) => item1.residents));
module.exports = countAnimals;
