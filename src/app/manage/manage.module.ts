import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './manage.routes';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from '../home/home.component';
// import { SocialChannelComponent } from '../home/social-channel/social-channel.component';
// import { SitestatComponent } from '../home/sitestat/sitestat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ManageMainComponent, 
    PostTableComponent,
    HomeComponent,
    // SocialChannelComponent,
    // SitestatComponent

  ]
})
export class ManageModule { }
