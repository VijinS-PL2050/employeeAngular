import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  isDisabled:boolean=true;

  name="vijin";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("button is clicked");
    alert("i m here");
  }

}
