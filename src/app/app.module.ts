import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// router
import { RoutingModule } from './app-routing';
import { HttpModule, JsonpModule , Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { MatButtonModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// SharedMaterialModule一定要放在BrowserModule之後
// import { SharedMaterialModule } from './shared-material/SharedMaterialModule';
// import { MatIconModule } from '@angular/material';

import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeModule } from './home/home.module';

import { PostTableService } from './manage/post-table/service/post-table.service';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';

import { TodoModule } from './todo/todo.module';
// Todo Mock API
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoDbService } from './todo/todo-data';
// import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
// import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { CoreModule } from './core/core.module';
import { MdlModule } from '@angular-mdl/core';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    UserRegisterComponent,
    ForgetPwdComponent,
    UserLoginComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule,
    HomeModule,
    TodoModule,
    // BrowserAnimationsModule,
    // SharedMaterialModule,
    // MatIconModule,
    HttpClientModule,
    CoreModule,
    MdlModule
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
