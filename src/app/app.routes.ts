import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// import { HttpModule, JsonpModule ,Http} from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component'; 
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes : Routes = [
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},
	{
		path:'home',
		component: HomeComponent
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
		path:'post',
		loadChildren:'./post/post.module#PostModule'
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ] 
})

export class RoutingModule {}