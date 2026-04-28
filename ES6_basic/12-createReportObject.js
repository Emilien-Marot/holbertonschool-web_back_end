export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employees) => {
      let department = 0;
      for (const dpt of employees) {
        department += 1;
      }
      return department;
    },
  };
}
