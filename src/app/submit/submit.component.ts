import {Component} from "@angular/core"
import {StoryService} from '../story.service'
@Component({templateUrl:"submit.component.html"})
export class SubmitComponent{
    
    title:string="";
  


    service = new StoryService();
  
}