const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
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
countEntrants();

function validatePrice(entrants) {
  return entrants.map((element) => {
    if (element >= 18 && element < 50) {
      return data.prices.adult;
    } if (element >= 50) {
      return data.prices.senior;
    } if (element <= 5) {
      return data.prices.child;
    }
    return element;
  });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const teste = entrants.map((element) => element.age);
  const teste2 = validatePrice(teste);
  const sum = teste2.reduce((acc, curr) => acc + curr, 0);
  return parseFloat(sum.toFixed(2));
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
