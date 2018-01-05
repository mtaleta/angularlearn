import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './manage.routes';
>>>>>>> heros

import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from '../home/home.component';
// import { SocialChannelComponent } from '../home/social-channel/social-channel.component';
// import { SitestatComponent } from '../home/sitestat/sitestat.component';

import { manageRoutes } from './manage.routes';

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageMainComponent, 
    PostTableComponent
  ],
  exports: [
    ManageMainComponent
=======
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

>>>>>>> heros
  ]
})
export class ManageModule { }
