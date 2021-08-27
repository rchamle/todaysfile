import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpComponent } from './emp/emp.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : '',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'employees' , component:EmpComponent},
  {path:'dashboard' , component:DashboardComponent},
  // {path:'employeesdetails' , component:MenuComponent},
  {path:'details/:id',component:EmpDetailsComponent},
  {path:"**", component:PagenotfoundComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
