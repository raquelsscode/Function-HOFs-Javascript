const data = require('../data/zoo_data');

const idStephanie = '9e7d4524-363c-416a-8759-8aa7e50c0992'

function isManager(id) {
const manager = data.employees.filter((element) => element.id === id)
.some((elementsome) => elementsome.managers[0] === idStephanie || elementsome.managers[0] === undefined)
return manager
}
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
