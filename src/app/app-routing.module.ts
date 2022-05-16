import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
// import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { ShopComponent } from './shop/shop.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  // {path:'employeee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
