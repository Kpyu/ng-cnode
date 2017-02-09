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
    redirectTo: 'list/all',
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