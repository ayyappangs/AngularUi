import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Service/employee.service';
import {NotificationService} from 'src/Service/notification.service';
import { Employee,Dependent,EmployeeCostToCompany} from 'src/Shared/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeCosts:EmployeeCostToCompany[];
  constructor(private employeeService: EmployeeService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.employeeService.allEmployees().subscribe((data:EmployeeCostToCompany[]) =>{
      this.employeeCosts = data;
      console.log(data);
      ;
    });

   
  }

}
