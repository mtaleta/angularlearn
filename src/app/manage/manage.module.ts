import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from '../home/home.component';

import { manageRoutes } from './manage.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageMainComponent, 
    PostTableComponent
  ],
  exports: [
    ManageMainComponent
  ]
})
export class ManageModule { }
