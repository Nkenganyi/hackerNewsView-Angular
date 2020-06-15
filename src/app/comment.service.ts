import axios from 'axios'

export class CommentService{

    getComments () {
        return axios.get('http://localhost:8080/comments')
      }

}