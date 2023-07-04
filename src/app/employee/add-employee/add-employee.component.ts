import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private router:Router,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.employeeService.BindDepartments();

    window.onpopstate=()=>{
      location.reload();
    };
  }

  onSubmit(form: NgForm) {
    let addId = this.employeeService.formData.id;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  //update
  updateRecord(form: NgForm) {
   console.log("Updating");
   this.employeeService.updatdeEmployee(form.value).subscribe((result=>{
    console.log(result);
    this.resetForm(form);
    //alert("Sucessfully updated");
    this.router.navigate(['emp-list']);
   }))
  }

  //Reset Form
  resetForm(form: NgForm) {
   if(form!=null){
    form.resetForm();

   }
  }

  //Insert
  InsertRecord(form: NgForm) {
    console.log("Inserting");
    console.log(form.value);
    this.employeeService.insertEmployee(form.value).subscribe((result => { console.log(result); alert("sucessfully added") }));
    this.resetForm(form);
   // alert("Sucessfully updated");

    this.toastr.success('Added sucessfully');
    this.router.navigate(['emp-list']);
  }

}
