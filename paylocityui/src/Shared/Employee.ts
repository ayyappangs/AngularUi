

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
  salary: number;
  benefits: number;
  costToCompany: number;
}
