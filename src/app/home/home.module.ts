import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    SocialChannelComponent,
    SitestatComponent,
  ]
})
export class HomeModule { }
