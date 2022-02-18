

export class Employee {

    employeeId: number;
    firstName: string;
    lastName: string;
    dependents: Dependent[];
}

export class Dependent {
  employeeId: number;
  name: string;
}

export class EmployeeCostToCompany {
  employeeId: number;
  employeeName: string;
  dependentName1: string;
  dependentName2: string;
  dependentName3: string;
  dependentName4: string;
  salary: number;
  benefits: number;
  costToCompany: number;
}
