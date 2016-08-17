import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view/view-list'

const appRoutes: Routes = [
  {
    path: '',
    component: ViewListComponent
  },
  {
    path: 'list',
    component: ViewListComponent
  },
  {
    path: 'topic/:id',
    component: ViewListComponent
  },
  {
    path: 'message',
    component: ViewListComponent
  },
  {
    path: 'about',
    component: ViewListComponent
  },
  {
    path: 'perinfo/:loginname',
    component: ViewListComponent
  },
  {
    path: 'login',
    component: ViewListComponent
  },
  {
    path: 'newtopic',
    component: ViewListComponent
  }
];
export const routing:any = RouterModule.forRoot(appRoutes);