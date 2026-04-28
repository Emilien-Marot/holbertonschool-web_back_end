export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employees) => {
      let department = 0;
      for (const dpt in employees) {
        department += 1;
      }
      return department;
    },
  };
}
