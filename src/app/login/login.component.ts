import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variable
  loginForm:FormGroup;
  isSubmitted=false;
  error:string='';
  
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    //this.loginForm is a property that will hold the formData and validationStatus
    //this.formBuilder is an instance of the formBuilderClass which is created by angular, used to simplify the creation of reactiveForm
    this.loginForm=this.formBuilder.group({
      //FormControlName fields
      userName:['',[Validators.required]],
      password:['',[Validators.required]]

    });
  }

  //get all controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  loginCredentails(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    console.log("Submitted form for credentials");

    //form is invalid
    if(this.loginForm.invalid){
      this.error="Sorry! Invalid Entry.. Try Agin";
    }

    //form is valid
    if(this.loginForm.valid){
      console.log("Submitted with valid");

      //calling method from AuthService
      this.authService.loginVerify(this.loginForm.value).subscribe(
        response =>{
          this.error='';
          console.log(response);
          //Set SesssionStorage and localStorage (browser -> inspect->Application)
          //SessionStorage - changes browser to browser
          //store the value of response.uName and response.rId
          //representing the userName and access role in the browser's  session
          sessionStorage.setItem('USERNAME',response.data.UserName);
          sessionStorage.setItem('ACCESS_ROLE',response.data.role.toString());

          //stores the same value in browser's local storage . the difference is that sessionStrorage data is cleared when the browser session ends,
          //while local storage data persists across  browser session .
          //localStorage -- same for all browsers.
          localStorage.setItem('USERNAME',response.data.UserName);
          localStorage.setItem('ACCESS_ROLE',response.data.role.toString());

          if(response==null){
            this.error="Invalid username and / or password";
          }else if(response.data.role==1){
            this.router.navigateByUrl('emp-list');
            console.log('Admin');
          }else if(response.data.role==2){
            this.router.navigateByUrl('ListReception');
            console.log('Receptionist');
          }else{
            this.error="Sorry! You are not allowed to access the system";
          }
        },
        error=>{
          console.log(error);
          this.error="Invalid username and password ! please try again."
        }
      );
    }
  }

}
