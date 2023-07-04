import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Department } from './department';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];
  formData: Employee = new Employee();
  departments: Department[];
  constructor(private httpClient: HttpClient) { }

  //for Listing Employees
  BlindListEmployee() {

    this.httpClient.get(environment.apiUrl + "/api/employees").toPromise().then(response => this.employees = response as Employee[])
  }

  //insert employee
  insertEmployee(emp: Employee): Observable<any> {
    console.log(emp.employeeName);
    return this.httpClient.post(environment.apiUrl + "/api/employees", emp);
  }

  //Get a particular Employee
  getEmployee(empId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/employees/" + empId);
  }

  //Update Employee
  updatdeEmployee(emp: Employee): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/employees", emp);
  }

  //Delete Employee
  deleteEmployye(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/employees/" + id);
  }

  //get department
  BindDepartments() {
    this.httpClient.get(environment.apiUrl + "/api/department").toPromise().then(response => this.departments = response as Department[]);
  }

}
