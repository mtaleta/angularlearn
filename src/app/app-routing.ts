import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component'; 
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

import { AuthGuardService } from './core/auth-guard.service';

const routes : Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'todo',
		redirectTo: 'todo/ALL',
		canLoad: [AuthGuardService]
	},
	
	// {
	// 	path:'',
	// 	redirectTo:'posts',
	// 	pathMatch:'full'
	// },
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
		path:'logins',
		component: UserLoginComponent
	},
	{ 
		path: 'manage',
		canActivate: [AuthGuardService],
		loadChildren:'./manage/manage.module#ManageModule'
	},
	// {
	// 	path:'post',
	// 	loadChildren:'./post/post.module#PostModule'
	// },
	// {
	// 	path:'**',//fallback router must in the last
	// 	loadChildren:'./home/home.module#HomeModule'
	// }
];

@NgModule({
	imports: [ 
    RouterModule.forRoot(routes, { useHash: true }),
  ],
	exports: [ RouterModule ] 
})

export class RoutingModule {}