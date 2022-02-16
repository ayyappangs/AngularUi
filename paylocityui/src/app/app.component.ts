import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paylocityui';
  employeeName ='';
  dependentName1 = '';
  dependentName2 = '';
  dependentName3 = '';
  dependentName4 = '';
  employee = new Employee();
  employeeCost = new EmployeeCostToCompany();
  constructor(private employeeService: EmployeeService) { }
ngOnInit(): void {
  this.employeeService.allEmployees().subscribe(res =>{
    console.log(res);
    ;
  });
}

Calculate(){
this.employee.firstName=this.employeeName;
this.employee.dependents = [{employeeId :0, name:this.dependentName1},
  {employeeId :0, name:this.dependentName2},
  {employeeId :0, name:this.dependentName3},
  {employeeId :0, name:this.dependentName4},];
  this.employeeService.calculate(this.employee).subscribe((data:EmployeeCostToCompany) => {
this.employeeCost = data;
    console.log(data)
  });
}
}
