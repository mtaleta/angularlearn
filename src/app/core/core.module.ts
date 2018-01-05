import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth2Service } from './auth2.service';
import { UserService } from '../user.service';

// import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { Routes } from '@angular/router'; 

import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'auth', useClass: Auth2Service },
    { provide: 'user', useClass: UserService },
    AuthGuardService
  ]
})

export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}