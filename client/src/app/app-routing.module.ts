import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration-component/registration-component.component';
import { LoginComponent } from './login-component/login-component.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserStocksComponent } from './user-stocks/user-stocks.component';


const routes: Routes = [{
  path:'register',component:RegistrationComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'dashboard',component:DashbordComponent
},
{
  path:'userStocks',component:UserStocksComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
