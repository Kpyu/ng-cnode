import { Injectable } from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceService {
  private apiUrl = 'https://cnodejs.org/api/v1/';  // URL to web api
  constructor(private http: Http) { }

  handleError(error) {
    console.error(error);
  }
  getTopicList() {
    return this.http.get(`${this.apiUrl}topics`)
      .toPromise()
      .then(response => {
        console.log(response.json());
      })
      .catch(this.handleError);
    // return this.http.get(this.heroesUrl)
    //   .toPromise()
    //   .then(response => { console.log(response.json().data); return response.json().data })
    //   .catch(this.handleError);
  }
  getTopic() {

  }
  newTopic() {

  }
  topicCollect() {

  }
  topicDeCollect() {

  }
  getUserCollect() {

  }
  newReply() {

  }
  ups() {

  }
  getUserInfo() {

  }
  validateAccessToken() {

  }
  getMessage() {

  }
  unreadCount(accesstoken:string): Promise<any> {
    return this.http.get(`${this.apiUrl}message/count?accesstoken=${accesstoken}`)
      .toPromise()
  }
  markAll() {
  
  }
}
