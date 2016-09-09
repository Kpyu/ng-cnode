import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export declare class NavBarComponent implements OnInit {
    private router;
    private route;
    navSet: Array<any>;
    currentNav: string;
    isShowNavbar: boolean;
    isLogin: boolean;
    loginUser: any;
    onToggle: EventEmitter<boolean>;
    onNavigate: EventEmitter<string>;
    constructor(router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    navigatorTo($event: any, tab: any): void;
    login($event: any): void;
    hide(): void;
}
