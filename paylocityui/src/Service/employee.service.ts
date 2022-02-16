import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from 'src/Shared/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = 'http://localhost:7071/api/Employees';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

allEmployees() : Observable<Employee[]> {

  return this.http.get<Employee[]>(this.apiUrl);
}

calculate(employee:Employee):any{
  const headers = { 'content-type': 'application/json'}
  const body=JSON.stringify(employee);
  console.log(body)
  return this.http.post("http://localhost:7071/api/CostToCompany", body,{'headers':headers}).pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }));
}

}
