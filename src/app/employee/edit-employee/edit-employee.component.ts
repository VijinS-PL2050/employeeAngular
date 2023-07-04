import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';
import{ DatePipe} from '@angular/common'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  //declare variables
  empId: number;
  employee:Employee=new Employee();
  
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    //getting the id passed from the browser URL
    this.empId=this.route.snapshot.params['empId'];
    this.employeeService.getEmployee(this.empId).subscribe(data =>{
      console.log(data)
      this.employee=data;
      //changing the data format
      var datePipe=new DatePipe("en-UK");
      let formatedyear:any = datePipe.transform(data.dateofjoining,'yyyy-MM-dd');
      data.Dateofjoining=formatedyear;
      this.employeeService.formData=Object.assign({},data);
      
    },error=>console.log(error));
  }

}
