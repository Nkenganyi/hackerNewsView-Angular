import {Component} from '@angular/core'
import {StoryService} from '../story.service';
import {Story} from '../story';

@Component({templateUrl:"jobs.component.html"})
export class JobsComponent{
    stories:Story[];

    service = new StoryService();

    getJobStories(){
        this.service.getJobStories().then(res =>{
            this.stories = res.data;
            }).catch(err =>{
            alert(err);
        })

    }

}