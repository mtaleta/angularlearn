import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// router
import { RoutingModule } from './app-routing';
import { HttpModule, JsonpModule , Http } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    HeroFormReactiveComponent,
    UserRegisterComponent,
    ForgetPwdComponent,
    UserLoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule,
    HomeModule,
    // BrowserAnimationsModule,
    // SharedMaterialModule,
    // MatIconModule,
    // HttpClientModule,
  ],
  providers: [
    PostTableService
    // ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
