import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// router
import { RoutingModule } from './app.routes';
import { HttpModule, JsonpModule , Http } from '@angular/http';

import { AppComponent } from './app.component';
// import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// SharedMaterialModule一定要放在BrowserModule之後
import { SharedMaterialModule } from './shared-material/SharedMaterialModule';
import { MatIconModule } from '@angular/material';
// hero表單
// import { HeroFormComponent } from './hero-form.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { SocialChannelComponent } from './home/social-channel/social-channel.component';
import { SitestatComponent } from './home/sitestat/sitestat.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

// import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // HeroFormComponent,
    HeroFormReactiveComponent,
    UserRegisterComponent,
    SocialChannelComponent,
    SitestatComponent,
    ForgetPwdComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    // ForgetPwdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
