import { Component } from '@angular/core'

import { UserService } from '../user.service'

@Component({ templateUrl: 'user.component.html' })
export class UserComponent {
  username: string="";
  password: string="";
  about: string="";
  created: string
  repassword:string;
  result: boolean = false


  service = new UserService()
  register () {
   this.service.register (this.username, this.password, this.about).then(res =>{
     
       alert(res.data.username)
   }).catch(err =>{
       alert(err)
   })
  }

  login () {
       this.service.login(this.username, this.password).then(res => { 
        alert(res.status+ " "+ res.data+" username= "+ this.username)
    }).catch(err =>{
        alert(err);
    })
  }
}
