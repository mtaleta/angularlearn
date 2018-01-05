import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component'; 
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';


const routes : Routes = [
	{
    path:'home',
    redirectTo: 'home'
	},
	{
		path:'user',
		component: UserRegisterComponent
	},
	{
		path:'forget',
		component: ForgetPwdComponent
	},
	{
		path:'login',
		component: UserLoginComponent
	},
];

@NgModule({
	imports: [ 
    RouterModule.forRoot(routes),
  ],
	exports: [ RouterModule ] 
})

export class RoutingModule {}