import {Component} from '@angular/core'
import {StoryService} from '../story.service'
import {Story} from '../story'
@Component({templateUrl:"news.component.html"})
export class NewsComponent{
    stories:Story[];

    service = new StoryService();

    getStories(){

        this.service.getStories().then(res =>{
            this.stories = res.data;
          
        }).catch(err =>{
            alert(err);
        })
    }
}