import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view/view-list';
import { AboutViewComponent } from './view/about-view';
import { LoginViewComponent } from './view/login-view';
import { PersonalInfoViewComponent } from './view/personal-info-view';
import { TopicViewComponent } from './view/topic-view';
import { TopicNewViewComponent } from './view/topic-new-view';
import { MessageViewComponent } from './view/message-view';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list/all',
    pathMatch: 'full'
  },
  {
    path: 'list/:tab',
    component: ViewListComponent
  },
  {
    path: 'topic/:id',
    component: TopicViewComponent
  },
  {
    path: 'message',
    component: MessageViewComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutViewComponent
  },
  {
    path: 'perinfo/:loginname',
    component: PersonalInfoViewComponent
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: LoginViewComponent
  },
  {
    path: 'newtopic',
    pathMatch: 'prefix',
    component: TopicNewViewComponent
  }
];
export const routing:any = RouterModule.forRoot(appRoutes);