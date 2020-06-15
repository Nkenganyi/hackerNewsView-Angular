import {Component} from '@angular/core'

@Component({templateUrl:"welcome.component.html"})
export class WelcomeComponent{

message:string ="Hello there!"

saySomething(){

     location.href = "/comments";
  //  alert(this.message)

  if(true){
    
  }
  
}
}