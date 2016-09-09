import { OnInit } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service';
export declare class LoginViewComponent implements OnInit {
    private api;
    title: string;
    model: any;
    constructor(api: DataServiceService);
    ngOnInit(): void;
    doLogin(): void;
}
