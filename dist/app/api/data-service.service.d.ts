import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export declare class DataServiceService {
    private http;
    private apiUrl;
    titleSource: any;
    title$: any;
    loginSource: any;
    login$: any;
    constructor(http: Http);
    changeTitle(title: string): void;
    checkLogin(loginUser: any): void;
    handleError(error: any): void;
    getTopicList(params: any): Promise<any>;
    getTopic(params: any): Promise<any>;
    newTopic(params: any): Promise<any>;
    topicCollect(params: any): Promise<any>;
    topicDeCollect(params: any): Promise<any>;
    getUserCollect(params: any): Promise<any>;
    newReply(params: any): Promise<any>;
    ups(params: any): Promise<any>;
    getUserInfo(params: any): Promise<any>;
    validateAccessToken(params: any): Promise<any>;
    getMessage(params: any): Promise<any>;
    unreadCount(accesstoken: string): Promise<any>;
    markAll(params: any): Promise<any>;
}
