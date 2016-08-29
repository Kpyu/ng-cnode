import { Injectable } from '@angular/core';
import { Http }     from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';


const sub = new Subject<string>();

@Injectable()
export class DataServiceService {
  private apiUrl:string = 'https://cnodejs.org/api/v1/';  // URL to web api
  public titleSource;
  public title$;
    // Observable string streams
  
  constructor(private http: Http) { 
    console.log('调用api服务');
    this.titleSource = sub;
    this.title$ = this.titleSource.asObservable();
  }

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  handleError(error) {
    console.error(error);
  }
  getTopicList(params:any): Promise<any>{
    return this.http.get(`${this.apiUrl}topics?page=${params.page}
      &limit=${params.limit}&tab=${params.tab}&mdrender=${params.mdrender||''}`).toPromise();
  }
  getTopic(topicId:string) : Promise<any>{
    return this.http.get(`${this.apiUrl}topic/${topicId}`).toPromise();
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
