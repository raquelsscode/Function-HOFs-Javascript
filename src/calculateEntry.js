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

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const peoples = countEntrants(entrants);
  const child = peoples.child * data.prices.child;
  const adult = peoples.adult * data.prices.adult;
  const senior = peoples.senior * data.prices.senior;
  const result = child + adult + senior;
  return result;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
