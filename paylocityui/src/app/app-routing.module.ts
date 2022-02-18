import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './Components/Calculations/Calculations.component';
import { EmployeesComponent } from './Components/employees/employees.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'calc',
    pathMatch: 'full'
  },
  { path: 'calc', component: CalculationsComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
