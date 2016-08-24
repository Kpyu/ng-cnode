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
    component: ViewListComponent
  },
  {
    path: 'list',
    component: ViewListComponent
  },
  {
    path: 'topic/:id',
    component: TopicNewViewComponent
  },
  {
    path: 'message',
    component: MessageViewComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  },
  {
    path: 'perinfo/:loginname',
    component: PersonalInfoViewComponent
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: 'newtopic',
    component: TopicNewViewComponent
  }
];
export const routing:any = RouterModule.forRoot(appRoutes);