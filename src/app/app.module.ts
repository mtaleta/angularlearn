import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// SharedMaterialModule一定要放在BrowserModule之後
import { SharedMaterialModule } from './shared-material/SharedMaterialModule'
import { MatIconModule } from '@angular/material';
// hero表單
// import { HeroFormComponent } from './hero-form.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    // HeroFormComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
