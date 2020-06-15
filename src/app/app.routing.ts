import { Routes, RouterModule, Router } from '@angular/router'
import {WelcomeComponent} from "./welcome";
import {UserComponent} from "./user"
import {NewComponent} from "./new"
import {CommentsComponent} from "./comments"
import {SubmitComponent} from "./submit"
import {NewsComponent} from "./news"
import { AsksComponent } from './ask'
import { JobsComponent } from './job'
import { ShowsComponent } from './show'


//import { AppRoutingModule } from './app-routing.module'

const routes: Routes = [
    {path:'',component:NewsComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'user',component:UserComponent},
    {path:'new',component:NewComponent},
    {path:'comments',component:CommentsComponent},
    {path:'submit',component:SubmitComponent},
    {path:'ask',component:AsksComponent},
    {path:'job',component:JobsComponent},
    {path:'show',component:ShowsComponent},
  
  { path: '**', redirectTo: '' }
]

export const appRoutingModule = RouterModule.forRoot(routes)