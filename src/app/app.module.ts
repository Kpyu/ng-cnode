import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav-bar';
import { HeaderBarComponent } from './header-bar'
import { HttpModule }     from '@angular/http';
import { routing }        from './app.routing';
import { ArticleTypePipe } from './view/pipes/article-type.pipe'
import { DataServiceService }  from './api/data-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    ArticleTypePipe,
    NavBarComponent,
    HeaderBarComponent,
    AppComponent,
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }