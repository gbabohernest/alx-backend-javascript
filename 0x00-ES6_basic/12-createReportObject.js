export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      //   const numberOfDepartments = Object.keys(employeesList).length;
      //   return numberOfDepartments;
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
