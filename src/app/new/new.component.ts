import { Component } from "@angular/core";
import {StoryService} from '../story.service'
import {Story} from '../story'

@Component({templateUrl :"new.component.html"})
export class NewComponent{

stories:Story[];

service = new StoryService();

getNewStories(){
    this.service.getNewStories().then(res =>{
        this.stories = res.data;
        }).catch(err =>{
        alert(err);
    })

}


}