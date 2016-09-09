import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export declare class HeaderBarComponent implements OnInit {
    private route;
    private router;
    isShowNavbar: boolean;
    title: string;
    onToggle: EventEmitter<boolean>;
    constructor(route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    navbarToggle(): void;
}
