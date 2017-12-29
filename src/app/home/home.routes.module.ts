import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from './sitestat/sitestat.component';

const HomerRoutes: Routes = [
  {
    path: 'social',
    component: SocialChannelComponent
  },
  {
    path: 'sitest',
    component: SitestatComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ]
})
export class HomeRouter {}
