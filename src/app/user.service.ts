import axios from 'axios'

export class UserService {


  register (username: string, password: string, about: string){

    return axios.post("http://localhost:2000/register",
    {
        "username":username,
        "password":password,
        "about":about
    }
    );
  }

  login(username: string, password: string){

    return   axios.post("http://localhost:2000/login",
    {
        "username":username,
        "password":password
       
    }
    );
  }
}
