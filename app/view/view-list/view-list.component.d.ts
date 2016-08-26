import { OnInit } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
export declare class ViewListComponent implements OnInit {
    private api;
    private route;
    private router;
    topics: Array<any>;
    sub: Subscription;
    constructor(api: DataServiceService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
}
