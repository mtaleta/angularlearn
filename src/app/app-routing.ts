import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component'; 
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { LoginComponent } from './login/login.component';
// import { TodoComponent } from './todo/todo.component';


const routes : Routes = [
<<<<<<< HEAD:src/app/app-routing.module.ts
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
		redirectTo: 'todo/ALL'
	},
	
	// {
	// 	path:'',
	// 	redirectTo:'posts',
	// 	pathMatch:'full'
	// },
=======
>>>>>>> heros:src/app/app-routing.ts
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
<<<<<<< HEAD:src/app/app-routing.module.ts
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
=======
>>>>>>> heros:src/app/app-routing.ts
];

@NgModule({
	imports: [ 
    RouterModule.forRoot(routes),
  ],
	exports: [ RouterModule ] 
})

export class RoutingModule {}