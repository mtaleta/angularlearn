<<<<<<< HEAD
import { PostTableComponent } from './post-table/post-table.component';
import { ManageMainComponent } from './manage-main/manage-main.component';

export const manageRoutes = [
  {
    path:'',
    component: ManageMainComponent,
    children: [
      { path: '', redirectTo:'posttable/page/1',pathMatch:'full'},
      { path:'posttable/page/:page', component: PostTableComponent },
      { path: '**', redirectTo: 'posttable/page/1' }
    ]
  }
]
=======
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
>>>>>>> heros
