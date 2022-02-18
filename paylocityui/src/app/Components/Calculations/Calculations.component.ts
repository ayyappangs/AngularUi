import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import {NotificationService} from 'src/Service/notification.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';

@Component({
  selector: 'app-Calculations',
  templateUrl: './Calculations.component.html',
  styleUrls: ['./Calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  title = 'paylocityui';
  employeeName:string;
  dependentName1:string;
  dependentName2:string;
  dependentName3:string;
  dependentName4:string;
  employee = new Employee();
  employeeCost = new EmployeeCostToCompany();


  constructor(private employeeService: EmployeeService, private notificationService: NotificationService) { }
ngOnInit(): void {
  
}

Calculate(){
this.employee.firstName=this.employeeName;
this.employee.dependents = [{employeeId :0,   name:this.dependentName1},
  {employeeId :0, name:this.dependentName2},
  {employeeId :0, name:this.dependentName3},
  {employeeId :0, name:this.dependentName4},];
  this.employeeService.calculate(this.employee).subscribe((data:EmployeeCostToCompany) => {
this.employeeCost = data;
    console.log(data)
  },(error:any) =>{
    console.error('Failed to calculate cost to company');
  this.notificationService.showError("Failed to calculate cost to company","") });
}
Save(){
  this.employeeService.saveemployee(this.employeeCost).subscribe(() => {

      },(error:any) =>{
        console.error('Save Failed');
       });
}
}
