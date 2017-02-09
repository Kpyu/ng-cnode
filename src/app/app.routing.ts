import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view/view-list';
import { AboutViewComponent } from './view/about-view';
import { LoginViewComponent } from './view/login-view';
import { PersonalInfoViewComponent } from './view/personal-info-view';
import { TopicViewComponent } from './view/topic-view';
import { TopicNewViewComponent } from './view/topic-new-view';
import { MessageViewComponent } from './view/message-view';
import { ReplyListComponent } from './view/topic-view/reply-list'
import { ArticleTypePipe } from './view/pipes/article-type.pipe'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'ng-cnode/list/all',
    pathMatch: 'full'
  },
  {
    path: 'ng-cnode/list/:tab',
    component: ViewListComponent
  },
  {
    path: 'ng-cnode/topic/:id',
    component: TopicViewComponent
  },
  {
    path: 'ng-cnode/message',
    component: MessageViewComponent
  },
  {
    path: 'ng-cnode/about',
    pathMatch: 'full',
    component: AboutViewComponent
  },
  {
    path: 'ng-cnode/perinfo/:loginname',
    component: PersonalInfoViewComponent
  },
  {
    path: 'ng-cnode/login',
    pathMatch: 'prefix',
    component: LoginViewComponent
  },
  {
    path: 'ng-cnode/newtopic',
    pathMatch: 'prefix',
    component: TopicNewViewComponent
  }
];
export const routing:any = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ViewListComponent, 
    AboutViewComponent,
    LoginViewComponent,
    PersonalInfoViewComponent,
    TopicViewComponent,
    TopicNewViewComponent,
    MessageViewComponent,
    ReplyListComponent,
    ArticleTypePipe
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }