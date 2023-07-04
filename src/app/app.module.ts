import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component'; 
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ ToastrModule } from 'ngx-toastr';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ NgxPaginationModule } from'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
