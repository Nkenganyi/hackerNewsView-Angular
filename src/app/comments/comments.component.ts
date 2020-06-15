import { Component } from "@angular/core";
import {CommentService} from '../comment.service'
import {Comment} from '../comment'
@Component({templateUrl:"comments.component.html"})
export class CommentsComponent{
    comments:Comment[];
    service = new CommentService();

getComments(){

    this.service.getComments().then(res =>{
        this.comments = res.data;
      
    }).catch(err =>{
        alert(err);
    })
}

}