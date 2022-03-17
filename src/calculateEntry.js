const data = require('../data/zoo_data');

const infos = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants) {
  if (Object.keys(entrants) === 0) {
    return true;
  }
  if (entrants === undefined) {
    return 0;
  }
  const crianca = entrants.filter((item) => item.age < 18);
  const adulto = entrants.filter((item) => item.age >= 18 && item.age < 50);
  const idoso = entrants.filter((item) => item.age >= 50);
  const object = {
    adult: adulto.length,
    child: crianca.length,
    senior: idoso.length,
  };
  return object;
}
console.log(countEntrants({}));

function calculateEntry(entrants) {
  const teste = entrants.map((element) => element.age);
  const teste2 = teste.map((element) => {
    if (element >= 18 && element < 50) {
      return data.prices.adult;
    } if (element >= 50) {
      return data.prices.senior;
    } if (element <= 5) {
      return data.prices.child;
    }
    return element;
  });
  const sum = teste2.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(calculateEntry([{ name: 'Carlos Nogueira', age: 50 }]));

module.exports = { calculateEntry, countEntrants };
