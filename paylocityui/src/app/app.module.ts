import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from '../Service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculationsComponent } from './Components/Calculations/Calculations.component';
import { EmployeesComponent } from './Components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
