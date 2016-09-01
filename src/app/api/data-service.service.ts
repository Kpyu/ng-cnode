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
  getTopic(params:any) : Promise<any>{
    return this.http.get(`${this.apiUrl}topic/${params.topicId}?mdrender=${params.mdrender || ''}
    ?accesstoken=${params.accesstoken}`).toPromise();
  }
  newTopic(params: any) : Promise<any> {
    return this.http.post(`${this.apiUrl}topics`, {
      accesstoken: params.accesstoken,
      title: params.title,
      tab: params.tab, // only ask\share\job
      content: params.content,
    }).toPromise();
  }
  topicCollect(params): Promise<any> {
    return this.http.get(`${this.apiUrl}topic_collect/collect?topic_id=${params.topic_id}
     &accesstoken=${params.accesstoken||''}`).toPromise();
  }
  topicDeCollect(params): Promise<any> {
    return this.http.post(`${this.apiUrl}topic_collect/de_collect`, {
      accesstoken: params.accesstoken,
      topic_id: params.topic_id
    }).toPromise();
  }
  getUserCollect(params): Promise<any> {
    return this.http.get(`${this.apiUrl}topic_collect/${params.loginname}`).toPromise();
  }
  newReply(params): Promise<any> {
    return this.http.post(`${this.apiUrl}topic/${params.topic_id}/replies`, {
      accesstoken: params.accesstoken,
      content: params.content,
      reply_id: params.reply_id
    }).toPromise();
  }
  ups(params): Promise<any> {
     return this.http.post(`${this.apiUrl}topic/${params.topic_id}/ups`, {
      accesstoken: params.accesstoken
    }).toPromise();
  }
  getUserInfo(params): Promise<any> {
    return this.http.get(`${this.apiUrl}user/${params.loginname}`).toPromise();
  }
  validateAccessToken(params): Promise<any> {
     return this.http.post(`${this.apiUrl}topic/${params.topic_id}/ups`, {
      accesstoken: params.accesstoken
    }).toPromise();
  }
  getMessage(params): Promise<any> {
    return this.http.get(`${this.apiUrl}topic_collect/${params.loginname}`).toPromise();
  }
  unreadCount(accesstoken:string): Promise<any> {
    return this.http.get(`${this.apiUrl}message/count?accesstoken=${accesstoken}`)
      .toPromise()
  }
  markAll(params): Promise<any> {
     return this.http.post(`${this.apiUrl}topic/${params.topic_id}/ups`, {
      accesstoken: params.accesstoken
    }).toPromise();
  }
}
