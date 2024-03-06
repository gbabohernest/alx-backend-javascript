export default function createIteratorObject(report) {
  // keep track of the current department & employee indices
  let departmentIndex = 0;
  let employeeIndex = 0;

  const departmentsList = Object.keys(report.allEmployees);
  let currentEmployeesList = report.allEmployees[departmentsList[departmentIndex]];

  return {
    next() {
      // checks if there are more employees left to iterate over in the current department
      if (employeeIndex < currentEmployeesList.length) {
        const value = currentEmployeesList[employeeIndex];
        employeeIndex += 1;
        return { value, done: false };
      }

      // No employees left to iterate over?  move to the next department
      departmentIndex += 1;

      if (departmentIndex < departmentsList.length) {
        // Are there more departments to iterate over ? update the currentEmployeesList

        currentEmployeesList = report.allEmployees[departmentsList[departmentIndex]];
        employeeIndex = 0;

        return this.next(); // recursively start iterating
      }

      // no more department? iteration is done.
      return { done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
