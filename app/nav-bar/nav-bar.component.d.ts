import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export declare class NavBarComponent implements OnInit {
    private route;
    navSet: Array<any>;
    currentNav: string;
    isShowNavbar: boolean;
    isLogin: boolean;
    onToggle: EventEmitter<boolean>;
    onNavigate: EventEmitter<string>;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    navigatorTo($event: any, tab: any): void;
    hide(): void;
}
