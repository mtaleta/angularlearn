import { Routes, RouterModule } from '@angular/router';
import { ManageModule } from './manage.module';
import { ManageMainComponent } from '../manage/manage-main/manage-main.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

export const routes: Routes = [
  {
    path: 'Mana',
    component: ManageMainComponent
  },
  {
    path: 'posttable',
    component: PostTableComponent
  }
];

export const routing = RouterModule.forChild(routes);