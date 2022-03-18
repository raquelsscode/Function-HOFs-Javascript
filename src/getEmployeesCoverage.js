const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;



function coverage(e) {
  const object = {};
  const allEmployees = employees
    .find((item) => item.firstName === e.name || item.lastName === e.name || item.id === e.id);
  const { responsibleFor } = allEmployees;
  const idAnimal = species.filter((animal2) => responsibleFor.includes(animal2.id))
    .map((animals) => animals.name);
  const location = species.filter((animal3) => responsibleFor.includes(animal3.id))
    .map((animals) => animals.location);
  Object.assign(object, {
    id: allEmployees.id,
    fullName: `${allEmployees.firstName} ${allEmployees.lastName}`,
    species: idAnimal,
    locations: location,
  });
  return object;
}

function isEmpty() {
  const employee = employees.filter((item) => item.firstName);
  const dados = employee.map((item1) => ({
    id: item1.id,
    fullName: `${item1.firstName} ${item1.lastName}`,
    species: species.filter((animal4) => item1.responsibleFor.includes(animal4.id))
      .map((animals) => animals.name),
    locations: species.filter((animal5) => item1.responsibleFor.includes(animal5.id))
      .map((animals) => animals.location),
  }));
  return dados;
}
isEmpty();

function getEmployeesCoverage(e) {
  if (!e) {
    return isEmpty();
  }
  const s = employees.some((f) => e.id === f.id || e.name === f.firstName || e.name === f.lastName);
  if (s === true) {
    return coverage(e);
  }
  throw new Error('Informações inválidas');
}

getEmployeesCoverage({ name: 'Sharonda' });

module.exports = getEmployeesCoverage;
