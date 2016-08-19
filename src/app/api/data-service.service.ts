import { Injectable } from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceService {
  private apiUrl:string = 'https://cnodejs.org/api/v1/';  // URL to web api
  constructor(private http: Http) { }

  handleError(error) {
    console.error(error);
  }
  getTopicList(): Promise<any>{
    return this.http.get(`${this.apiUrl}topics`).toPromise();
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
