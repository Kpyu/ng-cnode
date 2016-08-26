import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export declare class DataServiceService {
    private http;
    private apiUrl;
    constructor(http: Http);
    handleError(error: any): void;
    getTopicList(params: any): Promise<any>;
    getTopic(): void;
    newTopic(): void;
    topicCollect(): void;
    topicDeCollect(): void;
    getUserCollect(): void;
    newReply(): void;
    ups(): void;
    getUserInfo(): void;
    validateAccessToken(): void;
    getMessage(): void;
    unreadCount(accesstoken: string): Promise<any>;
    markAll(): void;
}
