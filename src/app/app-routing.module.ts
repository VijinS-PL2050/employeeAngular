import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import{ AuthGuard } from './shared/auth.guard'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'emp-list',component:ListEmployeeComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'addemployee',component:AddEmployeeComponent},
  {path:'editemployee/:empId',component:EditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
