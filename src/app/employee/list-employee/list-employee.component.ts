import { Component, OnInit } from '@angular/core';
import{EmployeeService} from'src/app/shared/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  filter:string;
  page:number=1;

  constructor(public employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.employeeService.BlindListEmployee();
  }

  //Update Employee --- passing the ID through
  updateEmployee(empId:number){
    console.log(empId);
    this.router.navigate(['editemployee',empId]);
  }
  deleteEmploye(empId:number){
    if(confirm('Are you sure to Delete this record ?')){
      this.employeeService.deleteEmployye(empId).subscribe(response=>{this.employeeService.BlindListEmployee();
      alert("Deleted Succesfully...");
    }, err=>{console.log(err)});
    }
  }

}
