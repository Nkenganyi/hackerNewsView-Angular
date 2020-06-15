import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { appRoutingModule } from './app.routing'

import {WelcomeComponent} from "./welcome";
import {UserComponent} from "./user"
import {NewComponent} from "./new"
import {CommentsComponent} from "./comments"
import {SubmitComponent} from "./submit"
import {NewsComponent} from "./news"
import {AsksComponent} from "./ask"
import { JobsComponent } from './job';
import { ShowsComponent } from './show'


@NgModule({
  declarations: [AppComponent,WelcomeComponent,UserComponent,NewComponent,
    NewsComponent,CommentsComponent,AsksComponent,JobsComponent,ShowsComponent,SubmitComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, appRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
