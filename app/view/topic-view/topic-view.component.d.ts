import { OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
export declare class TopicViewComponent implements OnInit, OnDestroy {
    private api;
    private route;
    private router;
    title: string;
    private sub;
    topic: any;
    constructor(api: DataServiceService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    submit(): void;
    ngOnDestroy(): void;
}
