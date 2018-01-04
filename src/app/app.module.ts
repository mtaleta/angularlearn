import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// router
import { RoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule , Http } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
// import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// SharedMaterialModule一定要放在BrowserModule之後
import { SharedMaterialModule } from './shared-material/SharedMaterialModule';
import { MatIconModule } from '@angular/material';

import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeModule } from './home/home.module';

import { SocialChannelComponent } from './home/social-channel/social-channel.component';
import { SitestatComponent } from './home/sitestat/sitestat.component';

import { ManageMainComponent } from './manage/manage-main/manage-main.component';
import { PostTableComponent } from './manage/post-table/post-table.component';
import { PostTableService } from './manage/post-table/service/post-table.service';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
// import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';
// Todo Mock API
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoDbService } from './todo/todo-data';
// import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
// import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroFormReactiveComponent,
    UserRegisterComponent,
    ForgetPwdComponent,
    UserLoginComponent,
    SocialChannelComponent,
    SitestatComponent,
    ManageMainComponent,
    PostTableComponent,
    LoginComponent,
    // TodoComponent,
    // TodoFooterComponent,
    // TodoHeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HomeModule,
    RoutingModule,
    TodoModule
    // InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
  ],
  providers: [
    PostTableService,
    // AuthService
    {provide: 'auth', useClass: AuthService},
    // ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
