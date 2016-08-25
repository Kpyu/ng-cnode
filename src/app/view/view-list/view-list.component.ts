import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../api/data-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  moduleId: module.id,
  selector: 'app-view-list',
  templateUrl: 'view-list.component.html',
  styleUrls: ['view-list.component.css'],
  providers: [DataServiceService]
})
export class ViewListComponent implements OnInit {
  public topics: Array<any> = [{}];
  public sub: Subscription;
  constructor(
    private api: DataServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    const self = this;
    this.sub = this.route.params.subscribe(params => {
      let tab = params['tab']; // (+) converts string 'id' to a number
      self.api.getTopicList({
          page: 1,
					tab: tab,
					limit: 40,
          mdrender: {}
      })
        .then(function (result) {
          self.topics = result.json().data;
      })
   });
   
  }
}
