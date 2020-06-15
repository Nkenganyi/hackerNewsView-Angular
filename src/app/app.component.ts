import { Component } from '@angular/core';
import {StoryService} from './story.service'
import {Story} from './story'
import {NewComponent} from './new'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hacker-project';


stories:Story[];
message:string;
id:number=0;
lock:boolean = true;
opt:boolean=false
ngOnInit() {
 
  this.lock=false;
}


service = new StoryService();
newom = new NewComponent()
 

getStories(){

  this.lock=true;
  if(this.opt === true && this.lock === true){

    this.service.getStories().then(res =>{
        this.stories = res.data;
      
    }).catch(err =>{
        alert(err);
    })
  } else{
  console.log('not clicked');
  }
}
  check(){
    alert("Checked!")
  }
}
