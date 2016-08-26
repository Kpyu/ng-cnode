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
  public isFirstLoad: boolean = true;
  public isOverLoaded: boolean = false;
  public currentPage;
  public isLoading: boolean = false;

  constructor(
    private api: DataServiceService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    const self = this;
    self.isFirstLoad = false;
    this.sub = this.route.params.subscribe(params => {
      self.isOverLoaded = false;
      self.currentPage = 1;
      let tab = params['tab']; 
      self.api.getTopicList({
          page: self.currentPage,
					tab: tab,
					limit: 40,
      })
        .then(function (result) {
          self.topics = result.json().data;
          if(self.topics.length<40){
            self.isOverLoaded = true;
          }
          self.isFirstLoad = false;
      })
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  loadMore(){
    const self = this;
    let tab = this.route.snapshot.params['tab']; 
    if(!this.isLoading){
      this.isLoading = true;
      self.api.getTopicList({
          page: ++self.currentPage,
          tab: tab,
          limit: 40,
      })
        .then(function (result) {
          self.isLoading = false;
          if(result.json().data.length<40){
            self.isOverLoaded = true;
          }
          self.topics = self.topics.concat(result.json().data);
      })
    }
  }
}
