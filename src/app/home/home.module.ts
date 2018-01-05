import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './home.routes';

import { HomeComponent } from './home.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from './sitestat/sitestat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    HomeComponent,
    SocialChannelComponent,
    SitestatComponent
  ]
})
export class HomeModule { }
