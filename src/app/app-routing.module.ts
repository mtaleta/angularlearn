import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component'; 
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes : Routes = [
	{
		path: '',
		redirectTo: 'todo',
		pathMatch: 'full'
	},
	{
		path: 'todo',
		component: TodoComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	// {
	// 	path:'',
	// 	redirectTo:'posts',
	// 	pathMatch:'full'
	// },
	{
    path:'home',
    component: HomeComponent
		// loadChildren: './home/home.module#HomeModule'
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
	{ 
		path: 'manage', 
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
    RouterModule.forRoot(routes),
  ],
	exports: [ RouterModule ] 
})

export class RoutingModule {}