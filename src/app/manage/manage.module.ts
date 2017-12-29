import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageMainComponent, PostTableComponent]
})
export class ManageModule { }
