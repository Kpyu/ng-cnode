import { OnInit } from '@angular/core';
import { DataServiceService } from './api/data-service.service';
export declare class Hero {
    id: number;
    name: string;
}
export declare class AppComponent implements OnInit {
    private apiService;
    isShowNavbar: boolean;
    isShowConfirm: boolean;
    isLogin: boolean;
    private accesstoken;
    title: string;
    showConfirm(): void;
    /**
     * 监听头部点击
     * @param {boolean} toggle
     */
    onToggle(toggle: boolean): void;
    onNavigate(tab: string): void;
    getUnreadCount(): void;
    constructor(apiService: DataServiceService);
    ngOnInit(): void;
}
