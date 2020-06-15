import {Component} from '@angular/core'
import {StoryService} from '../story.service';
import {Story} from '../story';

@Component({templateUrl:"shows.component.html"})
export class ShowsComponent{
    stories:Story[];

    service = new StoryService();

    getShowStories(){
        this.service.getShowStories().then(res =>{
            this.stories = res.data;
            }).catch(err =>{
            alert(err);
        })

    }

}