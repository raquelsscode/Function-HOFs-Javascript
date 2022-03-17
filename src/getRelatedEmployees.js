const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((element) =>
    element.managers.includes(id));
  return manager;
}
isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const related = data.employees.filter((elementfilter) =>
      elementfilter.managers.includes(managerId));
    const employee = related.map(
      (elementmap) => `${elementmap.firstName} ${elementmap.lastName}`,
    );
    return employee;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
