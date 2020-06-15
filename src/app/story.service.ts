import axios from 'axios'

export class StoryService {
  getStories () {
    return axios.get('http://localhost:8080/top-stories')
  }

  getNewStories(){
    return axios.get('http://localhost:8080/new-stories')
  }

  getAskStories(){
    return axios.get('http://localhost:8080/ask-stories')
  }
  
  getShowStories(){
    return axios.get('http://localhost:8080/show-stories')
  }
  
  getJobStories(){
    return axios.get('http://localhost:8080/job-stories')
  }
}
