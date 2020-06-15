import {Component} from '@angular/core'
import {StoryService} from '../story.service';
import {Story} from '../story';

@Component({templateUrl:"asks.component.html"})
export class AsksComponent{
    stories:Story[];

    service = new StoryService();

    getAskStories(){
        this.service.getAskStories().then(res =>{
            this.stories = res.data;
            }).catch(err =>{
            alert(err);
        })

    }

}