import { OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from './api/data-service.service';
import { Subscription } from 'rxjs/Subscription';
export declare class Hero {
    id: number;
    name: string;
}
export declare class AppComponent implements OnInit, OnDestroy {
    private apiService;
    isShowNavbar: boolean;
    isShowConfirm: boolean;
    isLogin: boolean;
    loginUserData: any;
    private accesstoken;
    title: string;
    subscription: Subscription;
    loginSubscript: Subscription;
    showConfirm(): void;
    /**
     * 监听头部点击
     * @param {boolean} toggle
     */
    onToggle(toggle: boolean): void;
    onNavigate(tab: string): void;
    onActivate($event: any): void;
    getUnreadCount(): void;
    constructor(apiService: DataServiceService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
